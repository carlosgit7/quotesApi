<script setup>
  import Nav from "./components/Nav.vue"
</script>

<template>
<div class="min-h-screen bg-green-800 bg-cover bg-center overflow-auto" style="background-image: url('./public/elements.jpg')">
    <Nav />
    <div class="container mx-auto grid justify-items-center">
     <router-view />
    </div>
</div>
</template>

