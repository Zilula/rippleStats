<template>
    <section>
            <img src="./../assets/logo.png" alt="">
            <nav class="nav">
                <RouterLink class="link" to="/" >Home</RouterLink>
                <RouterLink class="link" to="/docs" >Docs</RouterLink>
            </nav>
</section>
</template>

<script>
export default {

};
</script>

<style>
section {
    display: flex;
    flex-direction: row;
}
.nav {
    align-content: flex-end;
    background: transparent;
    border-bottom: 5px solid white;
    width: 50%
}
.link {
    text-align: center;
    color: white;
    padding-right: 80px;
    font-size: 20px;
}
img {
    width: 20%;
}

</style>
