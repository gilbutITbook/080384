<template>
  <div>
    <h1>Home View</h1>
    <RouterLink to="/about" id="main">/about(#main)</RouterLink>
    <RouterLink to="/about" id="sub">/about(#sub)</RouterLink>
    <RouterLink to="#main" id="other">#main(anchor)</RouterLink>
  </div>
</template>

<style scoped>
a {
  display: block;
  margin-top: 2000px;
}
</style>
