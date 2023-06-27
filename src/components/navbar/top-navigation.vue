<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand">Leela Web Dev</router-link>
      <!-- <a class="navbar-brand" href="#"></a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/html" class="nav-link">Html</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/css" class="nav-link">Css</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/javascript" class="nav-link"
              >Javascript</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/angular" class="nav-link">Angular</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reactjs" class="nav-link">React Js</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vuejs" class="nav-link">Vue Js</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
