<template>
    <div class="relative intro-section-size">
        <head-bar class="absolute top-1 min-w-full" />
        <frog />
        <intro-text
            @scroll-to-projects="$emit('scrollToProjects')"
            class="intro-text-position intro-text-style z-10"
        />
        <div
            class="absolute bottom-0 min-w-full h-20 bg-gradient-to-b from-transparent to-black"
        ></div>
    </div>
</template>

<script setup lang="ts">
import Frog from '../components/Frog.vue';
import HeadBar from '../components/HeadBar.vue';
import IntroText from '../components/IntroText.vue';

const emits = defineEmits(['scrollToProjects'])
</script>

<style scoped>
.intro-text-position {
  @apply absolute top-1/5 sm:top-1/5 md:top-1/4 left-2 sm:left-1/10 right-2 sm:right-1/10 md:right-auto
}
.intro-text-style {
    @apply md:w-1/2 lg:w-1/2 xl:w-2/6
}

.intro-section-size {
    min-height: 110vh;
}
</style>
