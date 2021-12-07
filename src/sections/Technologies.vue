<template>
    <div class="p-10">
        <h1 class="font-mono text-5xl text-center">Languages</h1>
        <div class="mt-20 flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
                <language-progress
                    class="w-72 sm:w-96"
                    v-for="(language, i) in languages"
                    :key="i"
                    :language-name="language.name"
                    :percentage="language.percentage"
                    :language-logo="language.logo"
                    :color="language.color"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LanguageProgress from '../components/LanguageProgress.vue';

const languages = [
    {
        "name": "Python",
        "percentage": "80",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
        "color": "green-800"
    },
    {
        "name": "Rust",
        "percentage": "85",
        "logo": "https://www.nicepng.com/png/full/34-348422_community-spotlight-rust-programming-language.png",
        "color": "red-500"
    },
    {
        "name": "Haskell",
        "percentage": "90",
        "logo": "https://i.imgur.com/tuFExZl.png",
        "color": "purple-800"

    },
    {
        "name": "C#",
        "percentage": "70",
        "logo": "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
        "color": "purple-900"
    },
    {
        "name": "C",
        "percentage": "90",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
        "color": "blue-500"
    },
    {
        "name": "C++",
        "percentage": "80",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
        "color": "blue-500"
    },
    {
        "name": "Typescript",
        "percentage": "85",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
        "color": "blue-800"
    },
    {
        "name": "JavaScript",
        "percentage": "75",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png",
        "color": "yellow-300"
    }
]
</script>
