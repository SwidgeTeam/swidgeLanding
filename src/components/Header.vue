<script lang="ts">
import { faS } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: false,
            mobileNav: false,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    mounted () {
        window.addEventListener('scroll', this.updateScroll);
        
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false ; 
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile=true; 
                return;
            }
            this.mobile=false;
            this.mobileNav=false; 
            return;
        },
    },
};
</script>

<template>
    <header :class="{'scrolled-nav': scrolledNav}">
        <nav class="brand">
            <div>
                <img href="./home" src="../assets/swidge-white.svg" class="navIcon" alt="Swidge Logo">
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
    
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" icon="fa-solid fa-bars"
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
    width: 90%;
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

.dropdown-nav {
    display: flex;  
    flex-direction: column;
    position:fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

}
.dropdown-nav li {
        margin-left: 0;
}

.scrolled-nav {
    background-color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8), 0 2px 4px -1px rgba(0, 0, 0, 0.6);
}


</style>