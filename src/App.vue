<template>
    <div class="container">
        <Desktop @node-opened="(name) => handleOpenWindow(name)" />
        <Window
            v-for="(window, index) in windows"
            :key="window.id"
            :name="window.name"
            :program="window.program"
            @close-window="handleCloseWindow(index)"
            @mousedown="focusApplicationWindow(index)"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Desktop from './components/Desktop.vue'
import Window from './components/Window.vue'

const windows = ref([])

const handleCloseWindow = (index) => windows.value.splice(index, 1)
const handleOpenWindow = (name) => {
    if (name == 'Shell') {
        windows.value.push({
            id: windows.value.length,
            name: 'Shell',
            program: 'ShellProgram'
        })
    } else if (name == 'File Explorer') {
        windows.value.push({
            id: windows.value.length,
            name: 'File Explorer',
            program: 'FileExplorerProgram'
        })
    } else if (name == 'Resume.pdf') {
        windows.value.push({
            id: windows.value.length,
            name: 'Resume.pdf',
            program: 'PDFProgram'
        })
    } else if (name == 'Google Chrome') {
        windows.value.push({
            id: windows.value.length,
            name: 'Chrome',
            program: 'BrowserProgram'
        })
    } else if (name == 'Flappy Bird') {
        windows.value.push({
            id: windows.value.length,
            name: 'Flappy Bird',
            program: 'FlappyBirdProgram'
        })
    }
}

const focusApplicationWindow = (index) => {
    const [item] = windows.value.splice(index, 1)

    windows.value.push(item)
}
</script>

<style scoped>
.container {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
</style>
