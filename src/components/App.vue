<template>
  <section class="bg-warning">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <top-navigation />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <router-view />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <footer-navigation />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TopNavigation from "./navbar/top-navigation.vue";
import FooterNavigation from "./navbar/footer-navigation.vue";

export default {
  components: {
    TopNavigation,
    FooterNavigation,
  },
};
</script>
