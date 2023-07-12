<template>
  <nav class="navbar">
    <div class="container justify-content-start">
      <router-link class="navbar-brand" :to="{name: 'Home'}">Home</router-link>
      <div class="navbar-bar" id="navbarNav">
        <div class="navbar-nav">
          <router-link class="nav-link active" :to="{name: 'Todos'}">Todos</router-link>
        </div>
      </div>
    </div>
  </nav>
  <!-- ./nav -->

  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped></style>