<template>
     <div id="app">
         <h1>
             The future of banking.
         </h1>
         <h2>       
            Why? The payment infrastructure was built before the Internet with few updates.
         </h2>
          <custom-icon name="arrow-down" base-class="custom-icon"></custom-icon>

          <div id="content">
              <ul>
                  <li>
                      <h3>Partnerships</h3>
                  </li>
                  <li>Some content in panel 2</li>
                  <li> Some content in panel 3</li>
                  <li> Some content in panel 4</li>
              </ul>
          </div>
    </div>
</template>

<script>
// import VueYoutube from './Youtube';
// import Carousel from './Carousel';

import customIcon from 'vue-icon/lib/vue-feather.esm';
export default {
    components: {
        customIcon
    },
    data: function() {
        return {
            baseClass: 'v-icon'
        };
    }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@media (min-width: 375px) {
    #app {
        font-family:'Montserrat', sans-serif;
    }
    h1 {
        font-size: 3em;
        color: white;
        text-align: center;
        font-weight: 100;
        margin-top: 2em;
    }
    h2 {
        text-align: center;
        color: rgb(205, 198, 198);
        margin-top: 2em;

    }
    .custom-icon {
        width: 3em;
        color: white;
        margin-left: 40vw;
        margin-top: 2em;
        border: solid white 1px;
        border-radius: 100%
    }
    ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: .2em;
    list-style-type: none;
    margin: .5em auto .5em auto;
    padding-inline-start: 0px;

    }
    li {
        background-color: red;
    }
}


</style>








// div {
//     padding: 2px;
//     margin: 2px;
// }
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
// li:nth-child(2) {
//     grid-column: span 2;
//     grid-row: 1;
// }
// li:nth-child(4) {
//     grid-column: 2;
//     grid-row: 2;
// }
// ul {
//      color: white;
// }
// img {
//     width: 300px;
//     height: 300px;
// }
// #introHead {
//     font-size: 30px;
// }
// #introBody {
//     font-size: 20;
// }
// #introDiv {
//     justify-content: center;
//     align-content: center;
//     margin: auto;
// }
// #quote {
//     font-size: 40px;
// }



// <ul>
//              <li>
//                 <div class="introDiv">
//                     <p id="introHead">What is XRP?</p>
//                     <p id="introBody">"Lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit,
//                         sed do eiusmod tempor 
//                         incididunt ut labore et dolore 
//                         magna aliqua. Ut enim ad 
//                         minim veniam, quis nostrud
//                         exercitation ullamco
//                         laboris nisi ut aliquip ex ea 
//                         commodo consequat.      
//                     </p>
//                 </div>
//              </li>
//              <li>
//                 <div class="quoteDiv">
//                     <Carousel/>
//                 </div>
//              </li>
//              <li>
//                 <div id="missionStatement">
//                     <p>
//                         sfsd fsfsfdds fsdf s df sdf sdf s df sdf sd fs df sdf sdf 
//                         sdfsf sdf sdf s df sf s dfs df sdf s df sdf s fds df sdf 
//                         sdf s dfs df sdf sdf s dfs df sdf s fd sdf sdf sd f sf sf 
//                         sd fs df sdf sfd sf ds fd sdf fd d sdffddsfsdfs dfs df sdf sdf
//                         sdfsfdsdf sdf sdf sd fs df sdf sfd sdsdfsfdsdf sdfsdfsdf sf  
//                     </p>
//                 </div>
//              </li>
//              <li>    
//                 <div id="video">
//                     <VueYoutube/>
//                     <img src="./../assets/xrplogo.jpeg"/>
//                 </div>
//              </li>
//          </ul>