<template>
  <Intro />
  <Technologies />
  <Frameworks />
  <Projects />
  <Contacts />
</template>

<script setup lang="ts">
import Intro from './sections/Intro.vue';
import Technologies from './sections/Technologies.vue';
import Projects from './sections/Projects.vue';
import Frameworks from './sections/Frameworks.vue';
import Contacts from './sections/Contacts.vue';
</script>

<style>
body {
  @apply bg-black text-white
}
</style>
