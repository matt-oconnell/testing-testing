<template>
  <div>
    I can do what I want with my count!
    <marquee>{{count}}</marquee>
  </div>
</template>

<script>
export default {
  name: 'CounterDisplay',
  props: {
    count: Number
    // if I change the prop to a different name, #1 will fail
    // newCount: Number,
  }
}
</script>
