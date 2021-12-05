<template>
    <div class="bg-black p-10">
        <h1 class="font-mono text-5xl text-white text-center">Projects</h1>
        <div class="flex justify-center">
            <div class="flex mt-20 justify-center w-full md:w-2/3 flex-wrap">
                <project-card
                    v-for="(_, i) in new Array(5)"
                    :key="i"
                    class="flex-none m-2"
                    title="Miaou"
                    description="nya nya"
                    picture-url="https://placekitten.com/500/500"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
</script>

<style scoped>
</style>