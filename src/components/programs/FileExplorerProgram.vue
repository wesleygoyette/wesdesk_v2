<template>
    <div class="container">
        <div class="topBar">
            <img v-if="currFolder.parent" class="back" src="/back.png" @click="handleBack" />
            <h4>C: {{ path }}</h4>
        </div>
        <div class="nodeContainer">
            <ClickNode
                v-for="node in currFolder.children"
                :key="node.id"
                :name="node.name"
                :imgUrl="node.type == 'Folder' ? '/folder.png' : '/document.png'"
                :blackText="true"
                @double-click="handeDoubleClick(node)"
            />
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import useFileSystem from '../../composables/useFilesystem.js'
import ClickNode from '../ClickNode.vue'

const emit = defineEmits(['node-opened'])

const { findPath, getPath } = useFileSystem()
const currFolder = ref(findPath('/Users/wesleygoyette'))
const path = computed(() => getPath(currFolder.value))

const handeDoubleClick = (node) => {
    if (node.type == 'Folder') currFolder.value = node
    else emit('node-opened', node.name)
}

const handleBack = () => {
    if (currFolder.value.parent) currFolder.value = currFolder.value.parent
}
</script>

<style scoped>
.container {
    background-color: white;
    color: black;
    border: 2px solid rgb(184, 184, 184);
    font-size: 16px;
    height: 100%;
    overflow: scroll;
    display: flex;
}
.nodeContainer {
    padding: 24px 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    border: none;
}
.topBar {
    background-color: rgb(218, 218, 218);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
}

.back {
    height: 22px;
}

.back:active {
    opacity: 50%;
}
</style>
