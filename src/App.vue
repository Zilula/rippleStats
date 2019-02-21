<template>
  <div id="app">
        <Header/>
      <RouterView></RouterView>
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
  background-image: url('./assets/background.svg');
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
