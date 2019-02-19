<template>
    <section>
        <header>
            <img src="./../assets/SVGlogo.svg" alt="">
        <nav class="nav">
            <RouterLink class="link" to="/" >Home</RouterLink>
            <RouterLink class="link" to="/docs" >Docs</RouterLink>
            <RouterLink class="link" to="/charts" >Charts</RouterLink>
        </nav>
        </header>
</section>
</template>

<script>
export default {

};
</script>

<style scoped>
header {
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-gap: 1em;
    padding: 5px;
}

.nav {
    background: transparent;
    border-bottom: 1px solid white;
    width: 30%;
    height: 30%;
    position: relative;
    top: 57px;
}
.link {
    text-align: center;
    color: white;
    padding-right: 80px;
    font-size: 15px;
}
img {
    padding: 2px;
    width: 80px;
    height: 80px;
    position: relative;
    top: 5px;
    left: 10px;
    
}

</style>
