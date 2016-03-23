<template>
  <label>
    <input :disabled="disabled" type="text" v-model="checkbox">
    <slot><slot>
  </label>
</template>

<script>
/**
 * A simple checkbox component.
 * @module components/basic/checkbox
 * @param {number} [disabled=false] - Disabled component
 * @param {string[]} model - Required, need two way
 */
export default {
  name: 'checkbox',
  props: {
    model: {
      type: Array,
      required: true,
      twoWay: true
    },
    disabled: Boolean
  }
};
</script>

<style lang="css" scoped>
</style>