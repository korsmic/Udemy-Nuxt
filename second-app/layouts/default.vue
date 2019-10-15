<template>
  <div>
    <TheHeader @sidenavToggle="dispaySidenav = !dispaySidenav" />
    <TheSideNav :show="dispaySidenav" @close="dispaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSideNav from "@/components/Navigation/TheSideNav";

export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      dispaySidenav: false
    };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
