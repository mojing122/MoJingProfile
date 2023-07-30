<template>
  <div id="page" class="text-center bg-gray-100">
    <Hello id="hello" />
    <Profile id="profile" />
    <Project id="project" />
    <Articles id="articles" class="text-left" />
    <Footer />
  </div>
</template>

<script setup>
import Hello from "./Hello.vue";
import Profile from "./Profile.vue";
import Project from "./Project.vue";
import Articles from "./Articles.vue";
import Footer from "./Footer.vue";
</script>
