<script lang="ts">
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default {
    name: "navigation",
    data() {
        return {
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
        }
    }
}
</script>

<template>
    <header>
        <nav class="brand">
            <div>
                <img src="../assets/swidge-white.svg" class="navIcon" alt="Swidge Logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <a class="link" href="#">Home</a>
                </li>
                <li>
                    <a class="link" href="#">Home</a>
                </li>
                <li>
                    <a class="link" href="#">Home</a>
                </li>
                <li><img src="../assets/discord-logo.png" href="https://discord.swidge.xyz/" class="socials"
                        alt="Discord Logo Swidge Link"> </li>
                <li><img src="../assets/twitter-logo-64.png" href="https://twitter.com/therealswidge" class="socials"
                        alt="Discord Logo Swidge Link"></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa far fa-bars"
                    :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <Transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <a class="link" href="#">Home</a>
                    </li>
                    <li>
                        <a class="link" href="#">Home</a>
                    </li>
                    <li>
                        <a class="link" href="#">Home</a>
                    </li>
                </ul>
            </Transition>
        </nav>
    </header>
</template>

<style>
header {
    background-color: rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    height: 20px;
    transition: 0.5s ease-in-out;
    color: #fff;
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    width: 90;
    transition: 0.5s ease-in-out;
    margin: 0 auto;


    @media (min-width: 1140px; ) {
        max-width: 1140px;
    }
}

.link {
    align-items: center;
}

.navigation {
    display: flex;
    align-content: center;
    flex: 1;
    justify-content: flex-end;
}

ul,
link,
a {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
    border-bottom: 1px solid transparent;
}

a:hover {
    color: beige;
    border-color: #fff;
}

li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
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
    transition: .5s ease-in-out;
    justify-content: center;

}

.navIcon {
    height: 4em;
    width: 4em;
    align-items: center;
}

.icon {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease-in-out;
}

.icon-active {
    transform: rotate(180deg);
}
</style>