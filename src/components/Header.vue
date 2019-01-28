<template>
    <section>
        <div id="logo">
            <img src="../../assets/logo.png" alt="logo"> 
        </div>
        <div>
            <nav class="nav">
                <RouterLink class="link" to="/" >Home</RouterLink>
                <RouterLink class="link" to="/docs" >Docs</RouterLink>
            </nav>
        </div>
</section>
</template>

<script>
export default {

};
</script>

<style>
.nav {
    border-bottom: 5px solid white;
}
.link {
    text-align: center;
    color: white;
    padding-right: 80px;
}

</style>
