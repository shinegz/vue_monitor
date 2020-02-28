<template>
  <div id="app">
    <!--显示面板-->
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style  lang="less" scoped>

</style>
