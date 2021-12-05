<template>
    <rounded-text-box>
        <header>Hi i'm Lilian,</header>
        <p>
            I'm a French {{ age }} years old developer. My main focus point is
            <span
                class="font-bold"
            >software architecture</span>
            which i use mainly for
            <span class="font-bold">back-end</span> or
            <span class="font-bold">application development</span>. I studied at
            <span class="fon-bold">Epitech Bordeaux</span> in France and
            participate at many projects on various problematics and subjects.
        </p>
        <p>
            My main programming languages are
            <span class="font-bold">Rust</span>,
            <span class="font-bold">Haskell</span>,
            <span class="font-bold">Typescript</span> and
            <span class="font-bold">Python</span>. I have also some experience in C#,
            C and C++ (on Linux platform), JavaScript or even some Java for Android.
        </p>
        <p>
            I have used some frameworks during my school years, my previous jobs or my various personnal projects, notably
            <span
                class="font-bold"
            >VueJS</span>,
            <span class="font-bold">Express</span> with Typescript,
            <span class="font-bold">.NET Framework</span>,
            <span class="font-bold">.NET Core</span> or even
            <span class="font-bold">Rocket</span> (a Rust web framework), i also have basic skills on
            <span class="font-bold">AndroidSDK</span>.
        </p>
        <p>
            I use
            <span class="font-bold">Linux</span> on a daily basis therefore i have some knowledge on it.
        </p>
        <div class="mt-4">
            <a class="underline">Get to know me through my projects!</a>
        </div>
    </rounded-text-box>
</template>

<script setup lang="ts">
import RoundedTextBox from './base/RoundedTextBox.vue';

const age = new Date().getUTCFullYear() - new Date("2000-4-27").getUTCFullYear()
</script>

<style scoped>
p {
    padding-top: 1em;
}
</style>
