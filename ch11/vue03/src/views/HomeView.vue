<script setup>
import { useWeatherStore } from '@/stores/weather.js';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs'; // dayjs 라이브러리 로드
import { getImage } from '@/composables/helper.js'; // helper.js 추가
import { onBeforeMount } from 'vue';
const weatherStore = useWeatherStore();
const { currentConditions } = storeToRefs(weatherStore);
onBeforeMount(() => {
  weatherStore.getCurrentWeatherInfo();
});
</script>
<template>
  <header v-if="currentConditions" class="header">
    <!-- 지역 -->
    <h1 class="header__title">
      <span class="material-symbols-outlined"> location_on </span>서울
    </h1>
    <h2 class="header__date">{{ dayjs().format('HH:mm') }}</h2>
  </header>
  <!-- 현재 날씨 -->
  <main v-if="currentConditions" class="main">
    <article class="weather">
      <section class="weather__info">
        <img
          :src="getImage(currentConditions.icon)"
          :alt="`${currentConditions.datetime} ${currentConditions.temp}도`"
          class="weather__img"
        />
        <h3 class="weather_temp">{{ currentConditions.temp }}°</h3>
        <p class="weather_summary">{{ currentConditions.conditions }}</p>

        <ul class="weather__moreList">
          <li class="weather__moreListItem">
            <p class="weather__subtitle">습도</p>
            <p class="weather__desc">{{ currentConditions.humidity }}%</p>
          </li>
          <li class="weather__moreListItem">
            <p class="weather__subtitle">풍속</p>
            <p class="weather__desc">{{ currentConditions.windspeed }}/ms</p>
          </li>
          <li class="weather__moreListItem">
            <p class="weather__subtitle">체감</p>
            <p class="weather__desc">{{ currentConditions.feelslike }}°</p>
          </li>
        </ul>
      </section>
    </article>
  </main>
  <!-- 하단 공통 영역 -->
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <a href="/">
          <span class="material-symbols-outlined footer_icons"> home </span>
        </a>
      </li>
      <li>
        <a href="forecast.html">
          <span class="material-symbols-outlined footer_icons"
            >stacked_line_chart
          </span>
        </a>
      </li>
      <li>
        <a href="/search.html">
          <span class="material-symbols-outlined footer_icons"> search </span>
        </a>
      </li>
    </ul>
  </footer>
</template>
