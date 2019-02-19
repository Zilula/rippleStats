<template>
     <div id="app">
         <ul>
             <li>
                <div class="introDiv">
                    <p id="introHead">What is XRP?</p>
                    <p id="introBody">"Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor 
                        incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud
                        exercitation ullamco
                        laboris nisi ut aliquip ex ea 
                        commodo consequat.      
                    </p>
                </div>
             </li>
             <li>
                <div class="quoteDiv">
                    <p id="quote">“It’s time to bring the banking
        system out of the 1970s.”</p>
                </div>
             </li>
             <li>
                <div id="missionStatement">
                    <p>
                        sfsd fsfsfdds fsdf s df sdf sdf s df sdf sd fs df sdf sdf 
                        sdfsf sdf sdf s df sf s dfs df sdf s df sdf s fds df sdf 
                        sdf s dfs df sdf sdf s dfs df sdf s fd sdf sdf sd f sf sf 
                        sd fs df sdf sfd sf ds fd sdf fd d sdffddsfsdfs dfs df sdf sdf
                        sdfsfdsdf sdf sdf sd fs df sdf sfd sdsdfsfdsdf sdfsdfsdf sf  
                    </p>
                </div>
             </li>
             <li>    
                <div id="video">
                    <VueYoutube/>
                    <img src="./../assets/xrplogo.jpeg"/>
                </div>
             </li>
         </ul>
    </div>
</template>

<script>
import VueYoutube from './Youtube';

export default {
    components: {
        VueYoutube
    }
};
</script>

<style scoped>
div {
    padding: 2px;
    margin: 2px;
}
ul {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr; 
    grid-gap: 1em;
    justify-content: center;
    list-style-type: none;
}
li:nth-child(1) {
    grid-row: span 3;
    align-content: center;
    margin: auto;
}
li:nth-child(2) {
    grid-column: span 2;
    grid-row: 1;
}
li:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
}
ul {
     color: white;
}
img {
    width: 300px;
    height: 300px;
}
#introHead {
    font-size: 30px;
}
#introBody {
    font-size: 20;
}
#introDiv {
    justify-content: center;
    align-content: center;
    margin: auto;
}
#quote {
    font-size: 40px;
}
</style>
