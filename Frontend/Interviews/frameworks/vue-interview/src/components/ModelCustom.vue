<template>
  <!--  <input type="text" :value="msg" @input="$emit('change' ,$event.target.value)"/>-->
  <div>{{ msg }}</div>
</template>

<script lang="js">
export default {
  name: "ModelCustom",
  props: {
    msg: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
