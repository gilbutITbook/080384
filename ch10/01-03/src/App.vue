<script setup>
const getData = () => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error('데이터를 가져오던 중 에러 발생:', error));
};
const postData = () => {
  fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'new data',
      description: 'sample data',
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error('데이터를 추가하던 중 에러 발생:', error));
};
const putData = () => {
  fetch('/api/data/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'update data',
      description: 'update description',
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) =>
      console.error('전체 데이터를 업데이트하던 중 에러 발생:', error)
    );
};
const patchData = () => {
  fetch('/api/data/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: 'update description',
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) =>
      console.error('데이터를 부분 업데이트하던 중 에러 발생:', error)
    );
};
</script>
<template>
  <div>
    <button @click="postData">POST</button>
    <button @click="getData">GET</button>
    <button @click="putData">PUT</button>
    <button @click="patchData">PATCH</button>
  </div>
</template>
