<template>
    <div class="container">
        <iframe :src="pdfSrc" width="100%" height="100%"></iframe>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const pdfSrc = ref('/resume.pdf')
</script>

<style scoped>
.container {
    background-color: white;
    color: black;
    border: none;
    font-size: 16px;
    overflow: scroll;
    display: flex;
    height: 100%;
}

iframe {
    border: none;
}
</style>
