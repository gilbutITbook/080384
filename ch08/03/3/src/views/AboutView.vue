<template>
  <div>
    <h1>About View</h1>
    <RouterLink to="/" id="main">/home(#main)</RouterLink>
    <RouterLink to="/" id="sub">/home(#sub)</RouterLink>
    <RouterLink to="#main" id="other">#main(anchor)</RouterLink>
  </div>
</template>
<style scoped>
a {
  display: block;
  margin-top: 2000px;
}
</style>
