<template>
    <div class="container" :style="containerStyle">
        <div class="topBar">
            <div class="dragger" @mousedown="startTopBarDrag">
                <h5 class="name">{{ props.name }}</h5>
            </div>
            <div class="topBarIconContainer">
                <img
                    src="/minus.svg"
                    class="topBarIcon"
                    @click="emit('close-window')"
                    draggable="false"
                />
                <img
                    src="/fullscreen.png"
                    class="topBarIcon"
                    @click="toggleFullscreen"
                    draggable="false"
                />
                <img
                    src="/cross.png"
                    class="topBarIcon"
                    @click="emit('close-window')"
                    draggable="false"
                />
            </div>
        </div>
        <div class="content">
            <iframe
                :src="props.programComponentPath"
                width="100%"
                height="100%"
                frameborder="0"
                v-show="!isDraggingOrResizing"
            ></iframe>
            <!-- Transparent overlay -->
            <div v-show="isDraggingOrResizing" class="drag-resize-overlay"></div>
        </div>
        <div class="scaleButton" @mousedown="startScaleDrag" />
    </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close-window'])

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    programComponentPath: {
        type: String,
        required: true
    }
})

const width = ref(Math.min(window.innerWidth * 0.9, 700))
const height = ref(width.value * 0.6)
const top = ref(window.innerHeight / 2 - height.value / 2)
const left = ref(window.innerWidth / 2 - width.value / 2)

let topBarDragging = false
let scaleDragging = false
let offsetX = 0
let offsetY = 0

const isDraggingOrResizing = ref(false)

const toggleFullscreen = () => {
    if (
        top.value === 0 &&
        left.value === 0 &&
        width.value === window.innerWidth &&
        height.value === window.innerHeight
    ) {
        top.value = window.innerHeight / 4
        left.value = window.innerWidth / 4
        width.value = window.innerWidth / 2
        height.value = window.innerHeight / 2
    } else {
        top.value = 0
        left.value = 0
        width.value = window.innerWidth
        height.value = window.innerHeight
    }
}

const startScaleDrag = () => {
    scaleDragging = true
    isDraggingOrResizing.value = true

    document.addEventListener('mousemove', scaleDrag)
    document.addEventListener('mouseup', endScaleDrag)
}

const startTopBarDrag = (e) => {
    topBarDragging = true
    isDraggingOrResizing.value = true

    offsetX = e.clientX - left.value
    offsetY = e.clientY - top.value

    document.addEventListener('mousemove', topBarDrag)
    document.addEventListener('mouseup', endTopBarDrag)
}

const scaleDrag = (e) => {
    if (scaleDragging) {
        width.value = constrain(e.clientX - left.value + 10, 200, window.innerWidth - left.value)
        height.value = constrain(e.clientY - top.value + 10, 200, window.innerHeight - top.value)
    }
}

const topBarDrag = (e) => {
    if (topBarDragging) {
        left.value = constrain(
            e.clientX - offsetX,
            window.innerWidth * -0.1,
            window.innerWidth * 1.1 - width.value
        )
        top.value = constrain(e.clientY - offsetY, 0, window.innerHeight * 1.1 - height.value)
    }
}

const endScaleDrag = () => {
    scaleDragging = false
    isDraggingOrResizing.value = false

    document.removeEventListener('mousemove', scaleDrag)
    document.removeEventListener('mouseup', endScaleDrag)
}

const endTopBarDrag = () => {
    topBarDragging = false
    isDraggingOrResizing.value = false

    document.removeEventListener('mousemove', topBarDrag)
    document.removeEventListener('mouseup', endTopBarDrag)
}

const containerStyle = computed(() => ({
    top: `${top.value}px`,
    left: `${left.value}px`,
    width: `${width.value}px`,
    height: `${height.value}px`,
    position: 'fixed'
}))

const constrain = (value, min, max) => {
    return Math.max(min, Math.min(value, max))
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.topBar {
    padding: 0px 12px 0px 0px;
    height: 30px;
    background-color: rgb(150, 150, 150);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.name {
    width: 100%;
    overflow: hidden;
    margin-right: 12px;
}

.topBarIconContainer {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 14px;
}

.topBarIcon {
    height: 50%;
    aspect-ratio: 1;
}

.topBarIcon:hover {
    opacity: 70%;
}

.content {
    flex-grow: 1;
    position: relative;
}

.drag-resize-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 10;
}

.scaleButton {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    cursor: se-resize;
    user-select: none;
}

.dragger {
    width: 100%;
    height: 100%;
    padding: 0px 0px 0px 12px;
    display: flex;
    align-items: center;
}
</style>
