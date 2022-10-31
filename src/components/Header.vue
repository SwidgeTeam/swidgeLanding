<script lang="ts">

</script>

<template>
    <header>
        <nav class="brand">
            <div>
                <img src="../assets/swidge-white.svg" class="navIcon" alt="Swidge Logo">
            </div>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <img src="../assets/discord-logo.png" href="" class="socials" alt="Discord Logo Swidge Link">
            <img src="../assets/twitter-logo-64.png" href="" class="socials" alt="Discord Logo Swidge Link">
        </nav>
    </header>
</template>

<style>
header {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 20px;
}

li {
    display: inline-block;
    align-items: center;
    padding: 12px;
}

.brand {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    height: 20px;
    margin: 0 auto;
}

.socials {
    height: 2em;
    width: 2em;
    margin: 12px;
}

.navIcon {
    height: 3em;
    width: 3em;
}
</style>