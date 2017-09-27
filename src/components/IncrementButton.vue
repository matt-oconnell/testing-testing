<template>
  <button @click="emitIncrement">++++Increment++++</button>
</template>

<script>
export default {
  name: 'IncrementButton',
  methods: {
    emitIncrement () {
      this.$emit('increment')
      // if I change my increment event to a different name, #2 will fail
      // this.$emit('increment2')
    }
  }
}
</script>
