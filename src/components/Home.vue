<template>
     <div id="app">
        <div class="container">
            <div>
                <h2>Page Header</h2>
            </div>
        </div>

        <div class="container">
            <div class="row white-text">
                <div class="class col s12 m6" id="tweet">
                <h4> Latest tweets from Ripple Lab CEO </h4>
                <div id="timeline">
                    <Timeline :id="'bgarlinghouse'" :sourceType="'profile'" :options="{ tweetLimit: '2' }"/>  
                </div>
                </div>
                <div class="col s12 m5 push-m1">
                <Body/> 
                </div>      
            </div>
        </div>
    </div>
</template>

<script>
import Body from './body';
import Timeline from 'vue-tweet-embed/timeline';

export default {
    components: {
        Body, 
        Timeline

    }
};
</script>

<style>
 h2 {
     color: white;
 }

</style>
