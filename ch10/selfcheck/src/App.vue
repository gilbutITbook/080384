<script setup>
const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('데이터를 가져오던 중 에러 발생:', error);
  }
};
const postData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'new data',
        description: 'sample data',
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('데이터를 추가하던 중 에러 발생:', error);
  }
};
const putData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'update data',
        description: 'update description',
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('전체 데이터를 변경하던 중 에러 발생:', error);
  }
};
const patchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: 'update description',
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('데이터를 부분 업데이트하던 중 에러 발생:', error);
  }
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
