<template>
  <div>
    <ProjectHP class="text-left" />
    <ProjectPL class="text-left" />
    <ProjectTT class="text-left" />
  </div>
</template>

<script>
import ProjectHP from "./ProjectHP.vue";
import ProjectPL from "./ProjectPL.vue";
import ProjectTT from "./ProjectTT.vue";
export default {
  components: { ProjectHP, ProjectPL, ProjectTT },
};
</script>

<style lang="scss" scoped></style>
