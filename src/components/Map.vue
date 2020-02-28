<template>
        <!--放置地图相关组件-->
        <!--地图容器-->
        <baidu-map class="mapBox" center="武汉" :zoom="15" :scroll-wheel-zoom="true">
        </baidu-map>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.mapBox{
  width: 100%;
  height: 100%;
}
</style>
