<script setup lang="ts">
import Carousel from './Carousel.vue';


var timer = _timer;

function _timer() {
    var dateNow = new Date();
    var seconds = dateNow.getSeconds();

}
</script>

<template>
    <div class="flex w-full items-center justify-center h-screen bg-img">
        <div class="flex content-center">
            <div class=" self-center">
                <a href="https://swidge.xyz">
                    <img src="../assets/swidge-white.svg" class="logo" alt="Swidge logo" />
                </a>
            </div>
            <div class="self-center">
                <Transition name="slide-up">
                    <h1 class="word1">Decentralised</h1>
                </Transition>
                <h1>Aggregated</h1>
                <!-- TODO: Make these Adjectives animated and transform in the same line -->

                <h1 class="">
                    One-Click Liquidity
                </h1>
            </div>
            <!-- TODO: Build the Network logo banner witha flowing animation -->
        </div>
        <!-- <Carousel></Carousel> -->
    </div>
</template>

<style scoped>
.logo {
    height: 40em;
    padding: 1.5em;
    will-change: filter;
    opacity: 0.6;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #B22F7F);
    opacity: 1;
}


.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>