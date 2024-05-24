<script setup>
import axios from 'axios';
const getData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/data');
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 가져오던 중 에러 발생:', error);
  }
};
const postData = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/data', {
      name: 'new data',
      description: 'sample data',
    });
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 추가하던 중 에러 발생:', error);
  }
};
const putData = async () => {
  try {
    const response = await axios.put('http://localhost:3000/api/data/1', {
      name: 'update data',
      description: 'update description',
    });
    console.log(response.data);
  } catch (error) {
    console.error('전체 데이터를 업데이트하던 중 에러 발생:', error);
  }
};
const patchData = async () => {
  try {
    const response = await axios.patch('http://localhost:3000/api/data/1', {
      description: 'update description',
    });
    console.log(response.data);
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
