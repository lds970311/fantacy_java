<template>
  <div>
    <!--    {{ $store.state.count }}-->
    {{ count }}
    {{ name }}
  </div>
</template>

<script lang="js">
import ModelCustom from "../components/ModelCustom.vue";
import {mapState} from "vuex";

export default {
  name: "VModel",
  components: {
    ModelCustom
  },
  data() {
    return {
      nameLength: 0
    }
  },
  mounted() {
    console.log(this.$store.state.mainOptions.count)
  },
  computed: {
    ...mapState("mainOptions", ["name", "count"])
  }
}
</script>

<style scoped>

</style>
