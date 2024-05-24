<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const books = [
  {
    id: 1,
    title: '코딩 자율학습 HTML + CSS + 자바스크립트',
    author: '김기수',
    publishYear: 2022,
    description:
      '코딩 입문자들도 쉽게 배울 수 있는 HTML + CSS + 자바스크립트 교과서',
  },
  {
    id: 2,
    title: '코딩 자율학습 나도코딩의 파이썬 입문',
    author: '나도코딩',
    publishYear: 2023,
    description:
      '일상 속 재미있는 예제로 파이썬 기본 개념을 배울 수 있는 입문서',
  },
  {
    id: 3,
    title: '코딩 자율학습 스프링 부트 3 자바 백엔드 개발 입문',
    author: '홍팍',
    publishYear: 2023,
    description: '스프링 부트로 백엔드 개발 과정과 핵심 개념을 배울 수 있는 입문서',
  },
  {
    id: 4,
    title: '코딩 자율학습 나도코딩의 C 언어 입문',
    author: '나도코딩',
    publishYear: 2022,
    description: 'C 언어를 혼자서도 끝까지 공부할 수 있게 돕는 프로그래밍 자습서',
  },
  {
    id: 5,
    title: '코딩 자율학습 제로초의 자바스크립트 입문',
    author: '조현영',
    publishYear: 2024,
    description: '12가지 프로그램을 만들면서 개념과 문법을 익히는 자바스크립트 입문서',
  },
];

const bookDetail = computed(() => {
  return books.find((v) => v.id === Number.parseInt(route.params.id));
});
</script>
<template>
  <h1>Book Detail</h1>
  <table v-if="bookDetail">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>publishYear</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ bookDetail.id }}</td>
        <td>
          {{ bookDetail.title }}
        </td>
        <td>
          {{ bookDetail.author }}
        </td>
        <td>
          {{ bookDetail.publishYear }}
        </td>
        <td>
          {{ bookDetail.description }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>도서의 상세 정보가 없습니다.</div>
  <RouterLink to="/books">목록으로</RouterLink>
</template>
<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
tr,
th {
  border: 1px solid #ccc;
  padding: 5px;
  min-width: 50px;
}
</style>
