<template>
    <div
        @click="handlePress"
        v-click-outside="handleOutsidePress"
        :class="containerClass"
        :style="{ width: hitBoxSize + 'px', height: hitBoxSize + 'px' }"
        draggable="false"
    >
        <img :src="props.imgUrl" :width="width" draggable="false" />
        <p :class="props.blackText ? 'blackText' : 'whiteText'">{{ props.name }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const width = 54
const hitBoxSize = width + 26

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    blackText: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['double-click'])

const selected = ref(0)
const containerClass = computed(() =>
    selected.value == 1 ? 'containerSelected' : 'clickNodeContainer'
)
let lastClick = Date.now()

const handlePress = () => {
    const timeSinceLastClick = Date.now() - lastClick

    if (selected.value == 0) {
        lastClick = Date.now()
        selected.value = 1
    } else if (timeSinceLastClick > 2500) {
        selected.value = 0
    } else {
        emit('double-click')
        selected.value = 0
    }
    lastClick = Date.now()
}

const handleOutsidePress = () => {
    if (selected.value > 0) selected.value--
}
</script>

<style scoped>
.clickNodeContainer,
.containerSelected {
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    user-select: none;
    border: 1px solid transparent;
    user-select: none;
}

.clickNodeContainer:hover {
    background-color: #aaaddb32;
    border: 1px solid #ffffff3e;
}

.containerSelected {
    background-color: #5962ee32;
    border: 1px solid #5962ee3e;
}

.containerSelected:hover {
    background-color: #5963ee5c;
    border: 1px solid #5962ee3e;
}

.whiteText,
.blackText {
    text-align: center;
    font-size: 11px;
}

.whiteText {
    color: white;
    text-shadow:
        0.7px 0.7px 0 #000,
        -0.7px 0.7px 0 #000,
        -0.7px -0.7px 0 #000,
        0.7px -0.7px 0 #000;
}

.blackText {
    color: black;
}
</style>
