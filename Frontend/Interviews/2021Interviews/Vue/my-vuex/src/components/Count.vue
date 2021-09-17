<template>
  <div class="count">
    <!--    <h1>当前求和为:{{ $store.state.num }} </h1>-->
    <h1>当前求和为:{{ getNum }} </h1>
    <h1>当前求和 x 10 为:{{ bigSum }} </h1>
    <select name="sum" id="sum" ref="selectRef">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="handleAdd($refs.selectRef.value)">+</button>
    <button @click="handleSub($refs.selectRef.value)">-</button>
    <button @click="addIfOdd($refs.selectRef.value)">奇数再加</button>
    <button @click="addAsync($refs.selectRef.value)">等等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  name: "Count",
  data() {
    return {}
  },
  methods: {
    /*handleAdd() {
      const val = this.$refs.selectRef.value
      // this.$store.commit('add', val)
      mapMutations(['add'])
    },
    handleSub() {
      const val = this.$refs.selectRef.value
      this.$store.commit('sub', val)
    },
    addIfOdd() {
      const val = this.$refs.selectRef.value
      mapActions('addIfOdd', val)
      // this.$store.dispatch('addIfOdd', val)
    },
    addAsync() {
      const val = this.$refs.selectRef.value
      this.$store.dispatch('addAsync', val)
    }*/
    ...mapActions(['addIfOdd', 'addAsync']),
    ...mapMutations({
      handleAdd: 'add',
      handleSub: 'sub',
    })
  },
  computed: {
    ...mapState({
      getNum: 'num'
    }),
    ...mapGetters(['bigSum'])
  },
  mounted() {
    console.log(this.$refs.selectRef.value)
  },
  updated() {

  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>