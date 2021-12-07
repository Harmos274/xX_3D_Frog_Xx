<template>
    <div class="border-2 border-white rounded-lg w-80">
        <div
            class="bg-cover bg-top h-52 rounded-t-md"
            :style="{ backgroundImage: `url(${pictureUrl})` }"
        ></div>
        <div class="p-5">
            <h5 class="font-mono font-bold text-2xl tracking-tight mb-2">{{ title }}</h5>
            <p class="font-mono mb-3 description-line-clamp">{{ description }}</p>
            <a
                href="#"
                class="font-mono rounded-lg text-sm px-3 py-2 text-center inline-flex items-center border-2 border-gray-200 hover:text-purple-500 hover:border-purple-500"
            >
                See more
                <svg
                    class="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    pictureUrl: String
})
</script>

<style scoped>
.description-line-clamp {
  height: 7.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

</style>
