<template>
  <el-container id="board">
    <el-header class="header">Header</el-header>
    <el-container class="container">
           <div class="item">中左</div>
           <div id="mapContainer" class="item">
             <dev-map></dev-map>
           </div>
           <div class="item">中右</div>
    </el-container>
    <el-footer class="footer">
        Footer
    </el-footer>
  </el-container>
</template>

<script>
import DevMap from './Map.vue'

export default {
  components: {
    DevMap
  }
}
</script>

<style lang="less" scoped>
#board{
  height: 100%;
}

.header{
  height: 10% !important;
}

.footer{
  height: 30% !important;
}

.container{
  height: 60%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between
}

#mapContainer{
  flex-grow: 1.5;
  min-width: 400px;
  margin: 0 10px
}

.item{
  background-color: blue;
  flex: auto;
}

</style>
