<script setup>
import { useWeatherStore } from '@/stores/weather';
import { storeToRefs } from 'pinia';
import { ref, watch, onBeforeMount } from 'vue';
import { getImage } from '@/composables/helper.js';
const weatherStore = useWeatherStore();
const { searchData } = storeToRefs(weatherStore);
const city = ref('');
const searchWeather = async () => {
  await weatherStore.getSearchWeatherInfo(city.value);
  city.value = '';
};
const removeItem = (address) => {
  searchData.value = searchData.value.filter((v) => v.address !== address);
};

watch(
  () => searchData,
  (newValue) => {
    localStorage.setItem('searchData', JSON.stringify(newValue.value));
  },
  { deep: true }
);
onBeforeMount(() => {
  const localData = JSON.parse(localStorage.getItem('searchData')) || [];
  searchData.value = localData;
});
</script>

<template>
  <main class="weather-city">
    <!-- 검색 영역 -->
    <section class="weather__search">
      <input
        v-model="city"
        type="text"
        class="weather__searchBar"
        placeholder="도시를 검색해주세요"
        @keyup.enter="searchWeather"
      />
    </section>
    <!-- 검색 데이터가 있으면 -->
    <section
      v-for="data in searchData"
      :key="data.address"
      class="weather__city"
    >
      <div class="weather__cityLeft">
        <strong class="weather__cityTmp">{{ data.temp }}°</strong>
        <p class="weather__cityTmpMore">
          H: {{ data.feelslikemax }}° / L: {{ data.feelslikemin }}°
        </p>
        <p>{{ data.address }}</p>
      </div>
      <div class="weather__cityRight">
        <img
          :src="getImage(data.icon)"
          :alt="`${data.address} ${data.temp}도`"
          class="weather__cityImg"
        />
      </div>
      <span
        class="material-symbols-outlined weather__cancel"
        @click="removeItem(data.address)"
      >
        cancel
      </span>
    </section>
    <!-- 검색 데이터가 없으면 -->
    <section v-if="searchData.length === 0" class="no-data">
      <p>검색한 지역이 없습니다.</p>
    </section>
  </main>
</template>
