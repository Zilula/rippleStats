<template>
  <div id="app">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="100000"
      :speed="3000"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
        <p style="line-height: 280px; font-size: 5rem; text-align: center;">
          SUUWOOP
        </p>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
    name: 'App',
    components: {
        Slider,
        SliderItem
    },
    data() {
        return {
            list: [],
            sliderValue: 2
        };
    },
    methods: {
        changeIndex(index) {
            this.sliderValue = index;
        }
    },
    mounted() {
        setTimeout(
            () =>
                (this.list = [
                    {
                        backgroundColor: '#3f51b5',
                        width: '100%',
                        height: '100%'
                    },
                    {
                        backgroundColor: '#eee',
                        width: '100%',
                        height: '100%'
                    },
                    {
                        backgroundColor: '#f44336',
                        width: '100%',
                        height: '100%'
                    },
                    {
                        backgroundColor: '#eee',
                        width: '100%',
                        height: '100%'
                    }
                ]),
            1000
        );
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin: 0;
}
</style>
