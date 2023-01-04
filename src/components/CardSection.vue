<script setup lang="ts">

</script>

<template>
    <div class="bg-dark">
        <div class="space-y-4 font-medium pt-16">
            <h2 class=""> //Swidge SDK </h2>
        
        </div>
        <div class="flex flex-row mt-20 pt-15 w-full">
            <div class="flex flex-col box">
                <h2>Fully Composable</h2>
                <span class="text">Fully composable SDK for x-chain asset & data transfers.</span>
                <span class="foot">One.</span>
            </div>
            <div class="flex flex-col box">
                <h2>Smart Routing</h2>
                <span class="text">Our algorithm identifies the best possible routes.</span>
                <span class="foot">Always.</span>
            </div>
            <div class="flex flex-col box">
                <h2>Aggregated Access</h2>
                <span class="text">Access to all chains, cross-chain liquidity and DEXs.</span>
                <span class="foot">Everything.</span>
            </div>
        </div>
        <button class="mt-20 mb-20">To the Docs...
        </button>
    </div>
</template>

<style scoped>

.box h2 {
    font-weight: 600;
    font-size: 2.5em;
    padding-top: 15px;
    filter: none;
    overflow-wrap: normal;
    line-height: 1em;
}

.text {
    font-size: 1.75em;
    padding: 1em;
    padding-left: 2.5rem;
    line-height: normal;
    text-align: left;
}

.foot {
    display: flex;
    padding: 1em;
    padding-left: 2.5rem;
    font-size: 1.45em;
    opacity: 0.7;
    justify-items: start;
}
</style>