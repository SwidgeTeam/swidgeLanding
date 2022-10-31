<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SwidgeSection from './components/SwidgeSection.vue';
import ArchitectureSection from './components/ArchitectureSection.vue';
import CardSection from './components/CardSection.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header class="h-20" />
  <SwidgeSection class="h-80%" />
  <CardSection />
  <ArchitectureSection class="h-screen" />
</template>
