<template>
    <Renderer ref="rendererC" antialias :orbit-ctrl="{ enableDamping: true }" :resize="true">
        <Camera :position="{ y: 1.5, z: -1.5, x: 0.5 }" />
        <Scene>
            <PointLight :position="{ y: 10, z: -40, x: 20 }" :intensity="2" />
            <GltfModel
                ref="frogVoxel"
                :src="frog3DModel"
                :position="{ y: 0, z: -0.5, x: -0.5 }"
                :rotation="frogVoxelRotation"
            />
        </Scene>
    </Renderer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GltfModel, Camera, PointLight, Renderer, RendererPublicInterface, Scene } from 'troisjs'
import frog3DModel from "../assets/frog.gltf?url"

const rendererC = ref()
const frogVoxelRotation = ref({ y: 0, x: 0, z: 0 })

onMounted(() => {
    const renderer = rendererC.value as RendererPublicInterface

    renderer.onBeforeRender(() => {
        frogVoxelRotation.value.y += 0.01
    })
})
</script>

<style scoped>
</style>
