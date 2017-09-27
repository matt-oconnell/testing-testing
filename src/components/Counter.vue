<template>
  <div class="counter">
    <CounterDisplay :count="count"></CounterDisplay>
    <IncrementButton @increment="increment"></IncrementButton>
  </div>
</template>

<script>
import CounterDisplay from './CounterDisplay'
import IncrementButton from './IncrementButton'

export default {
  name: 'Counter',
  components: {
    CounterDisplay,
    IncrementButton
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
