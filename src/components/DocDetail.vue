<template>
    <li>
        <div>
            <h3> {{document.title}}</h3>
            <p>{{document.author}}</p>
            <p>{{document.date}}</p>
            <a>{{document.url}} </a>
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

li {
    position: relative;
    margin: 10px;
    color: white
} 
a {
    color: white
}



</style>
