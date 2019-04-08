<template>
    <section>
        <header>
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
@media (min-width: 300px) {
    header {
        display:flex;
        margin: auto;
    }
    nav {
        font-size: 1.5em;
        margin: .5em auto .5em auto;
        
    }
}

</style>
