<template>
     <div id="app">
        <div class="quoteDiv">
            <p id="quote">“It’s time to bring the banking
system out of the 1970s.”</p>
        </div>
        <div class="introDiv">
            <p id="introHead">INTRO HEAD ASDASD ADASD AADSASD ASD ASD ADS AD ADDASDAD</p>
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
        <div id="video">
            
        </div>


    </div>
</template>

<script>

export default {
    components: {
    }
};
</script>

<style>
 h2 {
     color: white;
 }
 .quoteDiv {
    display: flex;
    justify-content: flex-end
}
 #quote {
     color: white;
     font-size: 25px;
     flex-direction: row;
     justify-content: left;
     max-width: 60%;
 }
 .introDiv {
    color: white;
    display: flex;
    justify-content: flex-start;
    max-width: 30%;
    display: block;
 }

</style>
