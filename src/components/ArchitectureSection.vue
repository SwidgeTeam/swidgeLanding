<script setup lang="ts">

</script>

<template>
    <div class="space-y-4 font-medium pt-16 bg-img">
        <h2 class=""> //Architecture </h2>
        <div class="flex">
            <div class="flex flex-col box-2">
                <img href="https://polywrap.io/" src="../assets/polywrap-horizontal-logo-text.svg"
                    alt="Polywrap Logo File" class="logo">
                <span class="text">Polywrap WASM wrappers enable maximal composability across all ecosystems. Build your x-Chain dApp
                    in your favourite programming language</span>
                <button class="flex justify-center button">Read more...</button>
            </div>
            <div class="flex flex-col box-2">
                <img href="" src="../assets/gelato-logo-text.svg" alt="Polywrap Logo File" class="logo">
                <span class="text">Gelato’s core infrastructure pieces enable many features of the Swidge protocol.</span>
                <button class="flex justify-center button">Read more...</button>
            </div>
        </div>
    </div>


</template>

<style scoped>
.background {}

.logo {
    height: 12em;
    padding: 2.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #B22F7F);
}

.button {
width: 33%;
justify-content: center;
}
</style>