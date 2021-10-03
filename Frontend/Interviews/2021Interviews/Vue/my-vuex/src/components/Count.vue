<template>
  <div class="main">
    <div class="count">
      <!--    <h1>当前求和为:{{ $store.state.num }} </h1>-->
      <h1>当前求和为:{{ num }} </h1>
      <h1>当前求和 x 10 为:{{ bigSum }} </h1>
      <h3 style="color: red">Person人数为:{{ personList.length }}</h3>
      <select id="sum" ref="selectRef" name="sum">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="showAlert">点我显示弹窗</button>
      <button @click="handleAdd($refs.selectRef.value)">+</button>
      <button @click="handleSub($refs.selectRef.value)">-</button>
      <button @click="addIfOdd($refs.selectRef.value)">奇数再加</button>
      <button @click="addAsync($refs.selectRef.value)">等等再加</button>
    </div>
    <hr/>
    <Person></Person>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import Person from "@/components/Person";
import countMixin from "@/mixins/countMinin";

export default {
  name: "Count",
  components: {Person},
  data() {
    return {}
  },
  mixins: [countMixin],
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
    showAlert() {
      this.showInfo();
    },
    ...mapActions('countOptions', ['addIfOdd', 'addAsync']),
    ...mapMutations({
      handleAdd: 'countOptions/add',
      handleSub: 'countOptions/sub',
    })
  },
  computed: {
    ...mapState('countOptions', ['num']),
    ...mapState('personOptions', ['personList']),
    ...mapGetters('countOptions', ['bigSum'])
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
