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
import thisWebsiteProject from "../assets/images/thiswebsiteproject.png?url"
import imageCompressorProject from "../assets/images/imagecompressorproject.png?url"
import areaProject from "../assets/images/areaproject.png?url"
import plazzaProject from "../assets/images/plazzaproject.png?url"
import lerveProject from "../assets/images/lerveproject.jpg?url"
import {ref} from "vue";

const staredProject = [
  {
    title: "This website",
    description: "This website is a good insight of my competencies in VueJS 3, i used TailWind CSS and ThreeJS to make it.",
    picture: thisWebsiteProject,
    information: "https://github.com/Harmos274/xX_3D_Frog_Xx"
  }, {
    title: "Image Compressor",
    description: "K-mean algorithm based image compressor, fully written in Haskell.",
    picture: imageCompressorProject,
    information: "https://github.com/Harmos274/ImageCompressor"
  }, {
    title: "Area",
    description: "A dashboard for Github, Reddit and Spotify. I fully developed the back-end in TypeScript with Express.",
    picture: areaProject,
    information: "https://github.com/Harmos274/Area"
  }
]

const otherProjects = [
  {
    title: "Plazza",
    description: "A concurrent programming group project using C++. Simulate a whole pizzeria with cooks and kitchens using threads.",
    picture: plazzaProject,
    information: "https://github.com/Harmos274/Plazza"
  }, {
    title: "lerve",
    description: "A simple Scheme-like Lisp interpreter web API, written in F# with .NET Core. I wrote it to test .NET Core integration with F#'s syntax.",
    picture: lerveProject,
    information: "https://github.com/Harmos274/lerve"
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
