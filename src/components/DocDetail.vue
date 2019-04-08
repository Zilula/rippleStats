<template>
    <li>
        <h3 id="title"> {{document.title}}</h3>
        <p>Publisher: {{document.author}}</p>
        <p>Date: {{document.date}}</p>
        <a :href="document.url">{{document.url}} </a>
    </li>
</template>

<script>
export default {
    props: {
        document: Object
    }

};
</script>

<style scoped>

li {
    background-color: #aac8f7;
    opacity: 60%;
    position: relative;
    margin: 10px;
    color:black;
    border-radius: 1em;
    overflow-wrap: break-word;

} 

p {
    margin: 1em;
}
h3 {
    margin: 1em;
}
a {
    color: white;
    margin: 1em;
}




</style>
