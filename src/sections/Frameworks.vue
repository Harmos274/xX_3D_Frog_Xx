<template>
  <div class="p-10">
    <h1 class="font-mono text-5xl text-center">Frameworks</h1>
    <div class="mt-20 flex flex-wrap justify-center space-x-10">
      <a v-for="(framework, i) in frameworks" :key="i" :href="framework.website" target="_blank">
        <div
            class="w-20 h-28 bg-contain bg-no-repeat bg-center cursor-pointer"
            :style="{ backgroundImage: `url(${framework.logo})` }"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import vueLogo from "../assets/images/vuelogo.svg?url"
import expressLogo from "../assets/images/expresslogo.png?url"
import netCoreLogo from "../assets/images/netcorelogo.svg?url"
import nodeLogo from "../assets/images/nodelogo.svg?url"
import rocketLogo from "../assets/images/rocketlogo.png?url"

const frameworks = [
  {
    logo: vueLogo,
    website: "https://vuejs.org"
  },
  {
    logo: expressLogo,
    website: "https://expressjs.com"
  },
  {
    logo: netCoreLogo,
    website: "https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0"
  },
  {
    logo: nodeLogo,
    website: "https://nodejs.org"
  },
  {
    logo: rocketLogo,
    website: "https://rocket.rs"
  }
]
</script>

<style scoped>
</style>
