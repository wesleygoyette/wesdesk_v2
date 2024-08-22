<template>
    <div class="container" @dragover="onDragOver" @drop="onDrop">
        <DesktopNode
            v-for="(node, index) in desktopNodes"
            :key="node.id"
            :name="node.name"
            :imgUrl="node.imgUrl"
            :x="node.x"
            :y="node.y"
            @moved="(x, y) => handleMove(index, x, y)"
            @double-click="emit('node-opened', node.name)"
        />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import DesktopNode from './DesktopNode.vue'

const desktopNodes = ref([
    {
        id: 0,
        name: 'File Explorer',
        imgUrl: '/fileExplorer.png',
        x: 0,
        y: 0
    },
    {
        id: 1,
        name: 'Shell',
        imgUrl: '/shell.png',
        x: 0,
        y: 1
    },
    {
        id: 2,
        name: 'Resume.pdf',
        imgUrl: '/pdf.png',
        x: 1,
        y: 0
    },
    {
        id: 3,
        name: 'Google Chrome',
        imgUrl: '/chrome.png',
        x: 1,
        y: 1
    },
    {
        id: 4,
        name: 'Flappy Bird',
        imgUrl: '/flappyBirdApp.png',
        x: 0,
        y: 2
    }
])

const emit = defineEmits(['node-opened'])

//set initial pos
for (let i = 0; i < desktopNodes.value.length; i++) {
    desktopNodes.value[i].x = 64 + desktopNodes.value[i].x * 110
    desktopNodes.value[i].y = 64 + desktopNodes.value[i].y * 120
}

const handleMove = (nodeIndex, x, y) => {
    const newX = Math.round((x - 64) / 110) * 110 + 64
    const newY = Math.round((y - 64) / 120) * 120 + 64

    if (
        newX >= 64 &&
        newX <= window.innerWidth - 64 &&
        newY >= 64 &&
        newY <= window.innerHeight - 64 &&
        !desktopNodes.value.some(
            (node, index) => index !== nodeIndex && node.x === newX && node.y === newY
        )
    ) {
        desktopNodes.value[nodeIndex].x = newX
        desktopNodes.value[nodeIndex].y = newY
    }
}

const onDragOver = (event) => {
    event.preventDefault()
}
const onDrop = (event) => {
    event.preventDefault()
}
</script>
<style scoped>
.container {
    background-color: rgb(23, 23, 23);
}
</style>
