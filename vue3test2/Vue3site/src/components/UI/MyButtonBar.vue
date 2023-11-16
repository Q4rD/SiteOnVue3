<template>
    <button class="mbb">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button-bar'
        
    }
</script>

<style scoped>
    .mbb {
        font-size: 15px;
        padding: 20px 25px;
        background: none;
        color: rgb(240, 240, 240);
        cursor: pointer;
        border: none;
    }

    .mbb:hover{
    background:rgb(121, 33, 33);
    color:rgb(240, 240, 240);
    }
</style>