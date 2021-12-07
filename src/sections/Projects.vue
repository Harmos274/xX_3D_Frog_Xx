<template>
  <div class="p-10">
    <h1 class="font-mono text-5xl text-center">Projects</h1>
    <div class="flex justify-center">
      <div class="flex mt-10 justify-center w-full p-10 md:w-2/3 flex-wrap">
        <project-card
            v-for="(project, i) in projectsToShow()"
            :key="i"
            class="flex-none m-2"
            :title="project.title"
            :description="project.description"
            :picture-url="project.picture"
            :information-url="project.information"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <a class="font-bold font-mono cursor-pointer" @click="toggleAllProject">------ <span class="hover:text-purple-500">{{ otherProjectsToShow ? "More" : "Less" }} projects</span> ------
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import {ref} from "vue";

const staredProject = [
  {
    title: "Miaou 1",
    description: "nya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nyanya nya",
    picture: "https://placekitten.com/500/500",
    information: ""
  }, {
    title: "Miaou 1",
    description: "nya nya",
    picture: "https://placekitten.com/500/500",
    information: ""
  }, {
    title: "Miaou 1",
    description: "nya nya",
    picture: "https://placekitten.com/500/500",
    information: ""
  }
]

const otherProjects = [
  {
    title: "new",
    description: "desc",
    picture: "",
    information: ""
  }, {
    title: "new",
    description: "desc",
    picture: "",
    information: ""
  },
  {
    title: "new",
    description: "desc",
    picture: "",
    information: ""
  }
]

const showedProjects = [...staredProject, ...otherProjects]
const otherProjectsToShow = ref(true)

function projectsToShow() {
  if (otherProjectsToShow.value) {
    return showedProjects.slice(0, staredProject.length)
  } else {
    return showedProjects
  }
}

function toggleAllProject() {
  otherProjectsToShow.value = !otherProjectsToShow.value
}
</script>

<style scoped>
</style>
