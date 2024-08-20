<template>
    <div class="container" @click="focusInput" ref="container">
        <div class="output" v-for="(line, index) in output" :key="index">
            {{ line }}
        </div>
        <span class="inputLine">
            <span class="prompt">{{ prompt }}</span>
            <input v-model="input" ref="inputElement" @keyup.enter="executeCommand" />
        </span>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const emit = defineEmits(['exit-app'])

const prompt = 'C:/Users/wesleygoyette>'
const input = ref('')
const output = ref(['Microsoft Windows [Version 10.0.22631.3880]'])
const inputElement = ref(null)
const container = ref(null)

const focusInput = () => {
    inputElement.value.focus()
}

const executeCommand = async () => {
    if (input.value.trim() === '') return

    const command = input.value.trim()
    output.value.push(prompt + ' ' + command)

    if (command.startsWith('echo')) {
        output.value.push(command.slice(5))
    } else if (command === 'clear') {
        output.value.splice(0, output.value.length)
    } else if (command === 'dir' || command === 'ls') {
        output.value.push('Documents  Downloads  Music  Pictures  Videos')
    } else if (command.startsWith('cd ')) {
        const path = command.slice(3)
        if (path) {
            output.value.push(`Changed directory to ${path}`)
        } else {
            output.value.push('Usage: cd <directory>')
        }
    } else if (command === 'date') {
        const now = new Date()
        output.value.push(now.toLocaleString())
    } else if (command === 'help') {
        output.value.push('Available commands: echo, clear, dir, ls, cd, date, help, exit')
    } else if (command === 'exit') {
        emit('exit-app')
    } else {
        output.value.push("Command not found: '" + command.split(' ')[0] + "'")
    }

    input.value = ''

    await nextTick()

    if (container.value) {
        container.value.scrollTop = container.value.scrollHeight
    }
}
</script>

<style scoped>
.container {
    background-color: black;
    color: white;
    border: 2px solid rgb(33, 33, 33);
    font-size: 16px;
    height: 100%;
    overflow: scroll;
    padding: 12px 8px;
}

.output {
    width: fit-content;
}
.inputLine {
    display: flex;
    gap: 8px;
}
input {
    background: none;
    color: white;
    border: none;
    width: 100%;
}
input:focus {
    outline: none;
}

input,
.output,
.prompt {
    font-size: 14px;
    font-family: 'Consolas', 'Courier New', monospace;
    line-height: 150%;
}
</style>
