<template>
    <div
        :style="containerStyle"
        class="container"
        draggable="true"
        @dragstart="onDragStart"
        @dragover="onDragOver"
        @dragend="handleDragEnd"
    >
        <ClickNode :name="props.name" :imgUrl="props.imgUrl" @double-click="emit('double-click')" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ClickNode from './ClickNode.vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['double-click', 'moved'])

const left = computed(() => props.x)
const top = computed(() => props.y)

const containerStyle = computed(() => ({
    top: `${top.value}px`,
    left: `${left.value}px`
}))

const onDragStart = (event) => {
    event.dataTransfer.effectAllowed = 'move'
}

const handleDragEnd = (event) => {
    emit('moved', event.clientX, event.clientY)
}
</script>
<style scoped>
.container {
    position: fixed;
    transform: translate(-50%, -50%);
}
</style>
