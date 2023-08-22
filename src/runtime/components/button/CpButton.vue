<script lang="ts" setup>
import { button } from '../../../../styled-system/recipes'

const emits = defineEmits(['click'])
</script>

<template>
  <div />
  <button :class="button({})" @click="emits('click')">
    <slot />
    <span />
  </button>
</template>
