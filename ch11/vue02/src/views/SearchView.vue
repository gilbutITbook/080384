<script setup></script>
<template>
  <main class="weather-city">
    <!-- 검색 영역 -->
    <section class="weather__search">
      <input
        type="text"
        class="weather__searchBar"
        placeholder="도시를 검색해주세요"
      />
    </section>
    <!-- 검색 데이터가 있으면 -->
    <section class="weather__city">
      <div class="weather__cityLeft">
        <strong class="weather__cityTmp">25°</strong>
        <p class="weather__cityTmpMore">H: 27° / L: 19°</p>
        <p>Montral, Canada</p>
      </div>
      <div class="weather__cityRight">
        <img
          src="assets/images/icons/cloudy.png"
          alt=""
          class="weather__cityImg"
        />
      </div>
    </section>
    <!-- 검색 데이터가 없으면 -->
    <section class="no-data" style="display: none">
      <p>검색할 지역을 입력해주세요.</p>
    </section>
  </main>
</template>
