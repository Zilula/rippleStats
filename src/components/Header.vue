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

<style scoped>
header {
    display: inline-block;
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
}

.nav {
    background: transparent;
    border-bottom: 1px solid white;
    width: 45%;
}
.link {
    text-align: center;
    color: white;
    padding-right: 80px;
    font-size: 15px;

}
img {
    width: 80px;
    height: 80px;
    justify-content: right;
}

</style>
