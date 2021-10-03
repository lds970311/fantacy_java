<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{ num }}</h3>
    <h3>列表中第一个人的名字是：{{ firstName }}</h3>
    <input v-model="name" placeholder="请输入名字" type="text">
    <button @click="add(name)">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-dateformat>{{ date }}</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Person",
  data() {
    return {
      name: '',
      date: ""
    }
  },
  mounted() {
    this.$store.dispatch('personOptions/addFromBack')
    this.timer = setTimeout(() => {
      this.date = new Date();
    }, 1000)
  },
  methods: {
    add: function (name) {
      this.$store.commit('personOptions/addPerson', name)
      this.name = ""
    }
  },
  computed: {
    ...mapState('personOptions', ['personList']),
    ...mapState('countOptions', ['num']),
    ...mapGetters('personOptions', ['firstName'])
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped>

</style>
