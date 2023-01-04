<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SwidgeSection from './components/SwidgeSection.vue';
import ArchitectureSection from './components/ArchitectureSection.vue';
import CardSection from './components/CardSection.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header class="h-20" />
  <SwidgeSection class="h-screen" />
  <CardSection />
  <ArchitectureSection class="h-screen" />
  <Footer class="h-1/3"/>
</template>
