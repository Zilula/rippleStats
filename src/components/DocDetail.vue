<template>
    <li>
        <div>
            <h3> {{document.title}}</h3>
            <p>{{document.url}}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        document: Object
    }

};
</script>

<style>
h3
li {
    position: relative;
    margin: 10px;
}

</style>
