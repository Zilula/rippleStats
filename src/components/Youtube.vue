<template>
   <div>
       <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
<button @click="playVideo">play</button>
   </div>
</template>

<script>

export default {
    data() {
        return {
            videoId: 'bU79HunxJp8'
        };
    },
    methods: {
        playVideo() {
            this.player.playVideo();
        },
        playing() {
            console.log('we are watching!!!');
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player;
        }
    }
};
</script>

<style>

</style>
