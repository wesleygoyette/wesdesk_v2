<template>
    <div class="container">
        <div class="toolbar">
            <input v-model="url" placeholder="Enter URL" @keydown.enter="navigateToUrl" />
            <button @click="navigateToUrl">Go</button>
        </div>
        <iframe :src="formattedUrl" width="100%" height="100%"></iframe>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

// Reactive state for URL
const url = ref('https://www.google.com')

// Computed property to ensure the URL has a valid protocol
const formattedUrl = computed(() => {
    if (!url.value.startsWith('http://') && !url.value.startsWith('https://')) {
        return `https://${url.value}`
    }
    return url.value
})

// Function to handle navigation
const navigateToUrl = () => {
    // Ensure a valid protocol is prepended
    if (!url.value) return
    url.value = formattedUrl.value
}
</script>

<style scoped>
.container {
    background-color: white;
    color: black;
    border: rgb(136, 136, 136) 2px solid;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.toolbar {
    padding: 8px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
}

input {
    flex: 1;
    padding: 4px 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-right: 8px;
    border-radius: 4px;
}

button {
    padding: 4px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

iframe {
    flex: 1;
    border: none;
}
</style>
