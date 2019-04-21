<template>
     <div id="app">
         <h1>
             The Standard.
         </h1>
         <Carousel/>
         <h2>       
            <span id="why">
                Why?
            </span>
            The payment infrastructure was built before the Internet with few updates.
         </h2>
          <custom-icon name="arrow-down" base-class="custom-icon"></custom-icon>

          <div id="content">
              <ul>
                  <li id="c1" class="cube">
                      <h3>Partnerships to form the future.</h3>
                      <p>View the connections Ripple Labs has made.</p>
                  </li>
                  <li id="c2" class="cube"> 
                      <h3>Technology to benefit everyone</h3>
                      <p>Learn what makes Ripple different from it`s competitors</p>
                  </li>
                  <li id="c3" class="cube">
                       <h3>Hyper-Ledger transparency</h3>
                       <p>How banks can benefite from Hyper-ledger use.</p>
                  </li>
                  <li id="c4" class="cube"> 
                        <h3>View statistics</h3>
                        <p>View data about the XRP ledger</p>
                  </li>
              </ul>
          </div>
        <h2 id="communityHeader">
              Join the community and learn how Ripple labs are transforming the global payment industry.  
        </h2>
        <div>
            <div class="communtityContainer">
                <p class="community">
                    Join the conversation at <a href="https://www.xrpchat.com/">XrpChat.com</a>.
                </p>
                <img src="../assets/rippleLogo.png" alt="Ripple Logo"
                width=80% height=80%>
            </div>
            <div class="communtityContainer">
                <p class="community">
                    Connect with other enthusiest or developers via <a href="https://twitter.com/Ripple?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Ripple`s</a> Twitter.
                </p>
                    <img src="../assets/Twitter_Bird.svg" alt="Twitter logo linking to Ripple`s twitter" width=100% height=80%>
            </div>
            <div class="communtityContainer">
                <p class="community">
                    <span>Are you a Developer?</span>
                    Checkout Ripple`s incredibly developer friendly API.
                    <a href="https://developers.ripple.com/index.html">Ripple`s API</a>  
                </p>
                    <img src="../assets/devIcon.png" alt="Random Icon that is the html or JS angle brackets."
                    width=80% height=80%>            
            </div>
        </div>
    </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm';
import Carousel from './Carousel';
export default {
    components: {
        customIcon,
        Carousel
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

/* @media (min-width: 800px) {
    .community {
        display: grid;
         grid-template-columns: 50% 50%;
    }
} */
  h1 {
      color: red;
}

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
        margin-top: 2em;
        margin-bottom: 2em;
        border: solid white 1px;
        border-radius: 100%
    }
    ul {
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    margin: .5em auto .5em auto;
    padding-inline-start: 0px;

    }
    li {
        height: 10em;
    }
    h3 {
        font-size: 1.2em;
        font-weight: 900;
        margin-left: .4em;
        color: white;
        background-color:rgba(128, 128, 128, 0.324)    
    }
    p {
        display: none;
        font-size:1.3em;
        margin-left: .4em;
        color:black;
        background-color:rgba(255, 255, 255, 0.646);
    }
    #c1 {
        background-image: url('../assets/c1.jpg');
        background-size: cover;
        }
    #c2 {
        background-image: url('../assets/c2.jpeg');
        background-size: cover;
        }
    #c3 {
        background-image: url('../assets/c3.jpg');
        background-size: cover;
        }
    #c4 {
        background-image: url('../assets/c4.png');
        background-size: cover;
        }
    .cube {
        border-radius: .3em;
    }
    #communityHeader {
        margin-top: 4em;
        margin-bottom: 4em;
    }
    .community {
        text-align: center;
        color: white;
        margin: 1em;
        margin-bottom: 2em;
        padding: 1em;
        display: block;
        border-radius: .2em;
        background-color:black;
    }
    .communtityContainer {
        display: grid;
        grid-template-columns: 70% 30%;
        height: 10em;
    }
    a {
        color: white;
    }
    img {
        margin: auto;
        display: block;
        /* padding-bottom: .5em; */
    }
    #why {
        font-size: 2em;
        color: white;
        display: block;
        margin: 2em;
    }
}
</style>