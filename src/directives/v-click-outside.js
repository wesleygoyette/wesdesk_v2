// src/directives/v-click-outside.js

export default {
    mounted(el, binding) {
        // Define the handler and cache it on the element
        el.__clickOutsideHandler__ = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event)
            }
        }

        // Add event listener on mount
        document.addEventListener('click', el.__clickOutsideHandler__)
    },
    unmounted(el) {
        // Remove event listener on unmount
        document.removeEventListener('click', el.__clickOutsideHandler__)
        delete el.__clickOutsideHandler__
    }
}
