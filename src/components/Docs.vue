<template>
<div>
    <h3 id="title">
        Below are a list of documents and publications that I have found valuable on the new world order. 
    </h3>
    <DocList
        v-bind:documents="Documents"/>
</div>
</template>

<script>
import DocsApi from '../services/documentsApi.js';
import DocList from './DocList.vue';
export default {
    data() {
        return {
            Documents: DocsApi.getDocs()
        };
    },
    components: {
        DocList
    }

};
</script>

<style scoped>
#title {
    color: white;
}

</style>
