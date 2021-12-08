<template>
  <Intro @scroll-to-projects="scroll"/>
  <Technologies/>
  <Frameworks/>
  <Projects ref="project"/>
  <Contacts/>
</template>

<script setup lang="ts">
import Intro from './sections/Intro.vue';
import Technologies from './sections/Technologies.vue';
import Projects from './sections/Projects.vue';
import Frameworks from './sections/Frameworks.vue';
import Contacts from './sections/Contacts.vue';
import {onMounted, ref} from "vue";

const offset = ref(0)
const project = ref(null)

onMounted(() => {
  offset.value = project.value.$el.offsetTop
})

function scroll() {
  window.scrollTo(0, offset.value)
}
</script>

<style>
body {
  @apply bg-black text-white
}
</style>
