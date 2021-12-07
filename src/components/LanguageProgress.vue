<template>
    <div class="flex items-center space-x-4">
        <div class="flex-shrink">
            <div
                class="w-16 h-20 bg-contain bg-no-repeat bg-center"
                :style="{ backgroundImage: `url(${languageLogo})` }"
            />
        </div>
        <div class="flex-1 min-w-0">
            <div class="text-lg font-mono mb-2">{{ languageName }}</div>
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div :class="`bg-${color} h-2 rounded-full`" :style="{'width': `${percentage}%`}"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    languageName: String,
    languageLogo: String,
    percentage: String,
    color: String
})
</script>

<style scoped>
</style>
