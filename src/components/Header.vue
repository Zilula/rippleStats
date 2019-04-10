<template>
    <section>
        <header>
            <nav class="nav">
                <Slide>
                    <RouterLink class="link" to="/" >Home</RouterLink>
                    <RouterLink class="link" to="/docs" >Documents</RouterLink>
                    <RouterLink class="link" to="/charts" >Charts</RouterLink>
                </Slide>
            </nav>
        </header>
    </section>
</template>

<script>
import { Slide } from 'vue-burger-menu';  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
    components: {
        Slide // Register your component
    }
};
</script>

<style scoped>
.link {
    color:white;
    font-size: 2em;
}
</style>
