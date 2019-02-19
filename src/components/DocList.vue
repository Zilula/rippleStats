<template>
    <ul>
        <DocDetail v-for="document in documents"
            v-bind:key="document.title"
            v-bind:document="document"/>

    </ul>
</template>

<script>
import DocDetail from './DocDetail';
export default {
    props: {
        documents: Array
    },
    components: {
        DocDetail
    }

};
</script>

<style>
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style-type: none;
    margin: 0;
    padding: 0;
}

</style>
