<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>

#app {
  font-family: 'Hind', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh);
}

html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

:focus {
  outline: none;
  box-shadow: none;
}

</style>
