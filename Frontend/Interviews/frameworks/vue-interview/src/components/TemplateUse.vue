<template>
  <div>
    <p>文本插值 {{ message }}</p>
    <p>JS 表达式 {{ flag ? 'yes' : 'no' }} （只能是表达式，不能是 js 语句）</p>

    <p :id="dynamicId">动态属性 id</p>

    <hr/>
    <p :class="list.length === 7 ?'red':'' ">{{ getLength }}</p>
    <!--    <p v-html="rawHtml">
          <span>有 xss 风险</span>
          <span>【注意】使用 v-html 之后，将会覆盖子元素</span>
        </p>-->
    <!-- 其他常用指令后面讲 -->
  </div>
</template>

<script lang="js">
import {msgTest} from "../test/msgTest";

export default {
  name: "TemplateUse",
  data() {
    return {
      message: 'hello vue',
      flag: true,
      rawHtml: '指令 - 原始 html <b>加粗</b> <i>斜体</i>',
      dynamicId: `id-${Date.now()}`,
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted() {
    console.log(msgTest());
  },
  computed: {
    getLength() {
      return this.list.length
    }
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      get() {
        console.log("123")
      }
    }
  }
}
</script>

<style scoped lang="less">
.red {
  color: red;
}
</style>
