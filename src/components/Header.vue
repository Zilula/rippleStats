<template>
    <section>
        <header>
            <img src="./../assets/SVGlogo.svg" alt="">
        <nav class="nav">
            <RouterLink class="link" to="/" >Home</RouterLink>
            <RouterLink class="link" to="/docs" >Docs</RouterLink>
        </nav>
        </header>
</section>
</template>

<script>
export default {

};
</script>

<style>
header {
    display: inline-block;
    padding: 50px;
}
section {
    display: flex;
    flex-direction: row;
}
.nav {
    margin-top: 21px; 
    display: flex;
    align-content: center;
    background: transparent;
    border-bottom: 2px solid white;
    width: 45%;
}
.link {
    text-align: center;
    color: white;
    padding-right: 80px;
    font-size: 20px;
}
img {
    /* display: block; */
    /* margin-bottom: 200px; */
    margin: 5px;
    float: left;
    width: 80px;
    height: 80px;
}

</style>
