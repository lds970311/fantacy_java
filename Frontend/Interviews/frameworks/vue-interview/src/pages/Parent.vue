<template>
  <div>
    <h2>parent</h2>
    <ChildA>
      <template v-slot:main>
        <h2>
          ChildA
        </h2>
      </template>
    </ChildA>
    <ChildB>
      <!--      <button @click="getChildren">获取子组件</button>-->
    </ChildB>
    <button @click="getChildren">获取子组件</button>
  </div>
</template>

<script lang="js">
import ChildA from "../components/Parent/ChildA.vue";
import ChildB from "../components/Parent/ChildB.vue";

export default {
  name: "Parent",
  components: {
    ChildA,
    ChildB
  },
  methods: {
    getChildren() {
      console.log(1123)
    }
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$children)
    }, 0)
  }
}
</script>

<style scoped>

</style>
