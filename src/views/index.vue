<template>
    <div class="map-box">
        <div id="cesiumContainer"></div>
    </div>
</template>
 
<script>
import { onMounted } from "vue";

export default {
    name: "",
    mounted() {
        // var viewer = new Cesium.CesiumWidget('cesiumContainer')

        // var viewer = new Cesium.Viewer("cesiumContainer", {
        //   animation: false, //是否显示动画控件
        //   homeButton: true, //是否显示home键
        //   geocoder: false, //是否显示地名查找控件        如果设置为true，则无法查询
        //   baseLayerPicker: false, //是否显示图层选择控件
        //   timeline: false, //是否显示时间线控件
        //   fullscreenButton: true, //是否全屏显示
        //   scene3DOnly: false, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        //   infoBox: false, //是否显示点击要素之后显示的信息
        //   sceneModePicker: false, //是否显示投影方式控件  三维/二维
        //   navigationInstructionsInitiallyVisible: true,
        //   navigationHelpButton: false, //是否显示帮助信息控件
        //   selectionIndicator: false, //是否显示指示器组件
        //   // 地形
        //   terrainProvider:new Cesium.createWorldTerrain({
        //     requestVertexNormals:true,
        //     requestWaterMask:true
        //   }),
        //   //1 加载天地图
        //   imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        //     url:
        //       "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=你的天地图申请的key",
        //     layer: "tdtBasicLayer",
        //     style: "default",
        //     format: "image/jpeg",
        //     tileMatrixSetID: "GoogleMapsCompatible",
        //     show: false,
        //     mininumLevel: 0,
        //     maximumLevel: 16
        //   })
        // });

        // console.log(viewer)
    },
    setup() {
        onMounted(() => {
            Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMmZlODRkZi01NzNkLTRhMzMtYTg1My0yN2NlMWVhMjEzMzMiLCJpZCI6NTQ1MTAsImlhdCI6MTYxOTk0MzQxN30.ukS-gh_QciFIeKV4iCvh8-X-2wRCiWnon57qGblkbmw"
            Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(80, 22, 130, 55)// 默认定位到中国上空，home定位到中国范围
            var viewer = new Cesium.Viewer('cesiumContainer', {
                animation: false, //是否显示动画控件
                homeButton: false, //是否显示home键
                geocoder: false, //是否显示地名查找控件        如果设置为true，则无法查询
                baseLayerPicker: false, //是否显示图层选择控件
                timeline: false, //是否显示时间线控件
                fullscreenButton: false, //是否全屏显示
                scene3DOnly: false, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
                infoBox: false, //是否显示点击要素之后显示的信息
                sceneModePicker: false, //是否显示投影方式控件  三维/二维
                navigationInstructionsInitiallyVisible: true,
                navigationHelpButton: false, //是否显示帮助信息控件
                selectionIndicator: false, //是否显示指示器组件
                // 地形
                terrainProvider: new Cesium.createWorldTerrain({
                    requestVertexNormals: true,
                    requestWaterMask: true
                }),
            });
            viewer._cesiumWidget._creditContainer.style.display = "none";
        })

    }
};
</script> 
<style scoped>
.map-box {
    width: 100%;
    height: 100%;
}

#cesiumContainer {
    width: 100%;
    height: 100%;
}
</style>