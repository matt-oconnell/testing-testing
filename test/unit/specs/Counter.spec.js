import Counter from '@/components/Counter'
import CounterDisplay from '@/components/CounterDisplay'
import IncrementButton from '@/components/IncrementButton'
import { mount } from 'avoriaz'

function forceUpdate (vm) {
  vm.$forceUpdate()
  vm._update(vm._render())
}

describe('Counter.vue', () => {
  describe('children', () => {
    it('#1: TEST EVENTS - increments the count on @increment from child IncrementButton', () => {
      const counterWrapper = mount(Counter)
      const incrementButtonWrapper = counterWrapper.find(IncrementButton)[0]

      expect(counterWrapper.data().count).to.equal(0)

      // If we stick to emitSomeEvent convention and keep those methods to 1 line this.$emit('someEvent', ...args)
      // we can ensure the linkage between the child events and the parent
      incrementButtonWrapper.vm.emitIncrement()
      expect(counterWrapper.data().count).to.equal(1)
    })

    it('#2: TEST PROPS - passes count to CounterDisplay', () => {
      const counterWrapper = mount(Counter)
      const counterDisplayWrapper = counterWrapper.find(CounterDisplay)[0]

      expect(counterWrapper.data().count).to.equal(0)
      expect(counterDisplayWrapper.vm.$props.count).to.equal(0)

      counterWrapper.setData({
        count: 1
      })
      expect(counterDisplayWrapper.vm.$props.count).to.equal(1)
    })

    it('#3: TEST MORE INTEGRATION-Y (no data) - on increment, counter updates count and passes to CounterDisplay', () => {
      const counterWrapper = mount(Counter)
      const incrementButtonWrapper = counterWrapper.find(IncrementButton)[0]
      const counterDisplayWrapper = counterWrapper.find(CounterDisplay)[0]

      incrementButtonWrapper.vm.emitIncrement()
      forceUpdate(counterWrapper.vm)

      expect(counterDisplayWrapper.vm.$props.count).to.equal(1)
    })
  })
})
