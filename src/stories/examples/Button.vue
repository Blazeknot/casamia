<script setup>
import './button.css'
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  primary: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium'
  },
  backgroundColor: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}))

function onClick() {
  emit('click')
}
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">{{ label }}</button>
</template>
