<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {},
  mixins: [],
  data() {
    return {
      message: "Main"
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.main {

}
</style>


