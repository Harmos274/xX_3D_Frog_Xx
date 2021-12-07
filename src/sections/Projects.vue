<template>
  <div class=" p-10">
    <h1 class="font-mono text-5xl text-center">Projects</h1>
    <div class="flex justify-center">
      <div class="flex mt-20 justify-center w-full p-10 md:w-2/3 flex-wrap">
        <project-card
            v-for="(project, i) in showedProjects"
            :key="i"
            class="flex-none m-2"
            :title="project.title"
            :description="project.description"
            :picture-url="project.picture"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <button class="font-bold font-mono" @click="seeAllProject"> See More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import {ref} from "vue";

const staredProject = [{
  title: "Miaou 1",
  description: "nya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nya",
  picture: "https://placekitten.com/500/500"
}, {
  title: "Miaou 1",
  description: "nya nya",
  picture: "https://placekitten.com/500/500"
}, {
  title: "Miaou 1",
  description: "nya nya",
  picture: "https://placekitten.com/500/500"
}]

const showedProjects = ref(staredProject)

function seeAllProject() {
  console.log("toto")
  showedProjects.value.push({title: "new", description: "desc", picture: ""})
}
</script>

<style scoped>
</style>
