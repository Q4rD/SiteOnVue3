<template>
    <button class="classicbut">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'classic-button'
    }
</script>

<style scoped>
.classicbut {
    font-size: 15px;
    padding: 15px 25px;
    text-align: center;
    background: none;
    color: rgb(240, 240, 240);
    cursor: pointer;
    border: none;
}
.classicbut:hover {
    background:rgb(121, 33, 33);
    color:rgb(240, 240, 240);
}
</style>