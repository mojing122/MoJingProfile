<template>
  <div id="page" class="text-center bg-gray-100">
    <Hello id="hello" />
    <Profile id="profile" />
    <Project id="project" />
    <div class="h-[2000px]"></div>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
import Profile from "./Profile.vue";
import Project from "./Project.vue";
export default {
  components: { Hello, Profile, Project },
};
</script>
