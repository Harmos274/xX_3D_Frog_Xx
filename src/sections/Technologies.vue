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
import pythonLogo from "../assets/images/pythonlogo.svg?url"
import rustLogo from "../assets/images/rustlogo.png?url"
import haskellLogo from "../assets/images/haskelllogo.png?url"
import csharpLogo from "../assets/images/csharplogo.svg?url"
import cLogo from "../assets/images/clogo.svg?url"
import cppLogo from "../assets/images/cpplogo.svg?url"
import tsLogo from "../assets/images/tslogo.svg?url"
import jsLogo from "../assets/images/jslogo.svg?url"


const languages = [
    {
        name: "Python",
        percentage: "80",
        logo: pythonLogo,
        color: "green-800"
    },
    {
        name: "Rust",
        percentage: "82",
        logo: rustLogo,
        color: "red-500"
    },
    {
        name: "Haskell",
        percentage: "90",
        logo: haskellLogo,
        color: "purple-800"

    },
    {
        name: "C#",
        percentage: "70",
        logo: csharpLogo,
        color: "purple-900"
    },
    {
        name: "C",
        percentage: "90",
        logo: cLogo,
        color: "blue-500"
    },
    {
        name: "C++",
        percentage: "60",
        logo: cppLogo,
        color: "blue-500"
    },
    {
        name: "Typescript",
        percentage: "85",
        logo: tsLogo,
        color: "blue-800"
    },
    {
        name: "JavaScript",
        percentage: "75",
        logo: jsLogo,
        color: "yellow-300"
    }
]
</script>
