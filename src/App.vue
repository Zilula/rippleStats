<template>
  <div id="app">
    <div class="container">
        <Header/>
      <RouterView></RouterView>
    </div>
    <div>
      <Docs/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
    components: {
        Header
    }
};
</script>

<style>

body {
  background-color: black;
}
</style>
