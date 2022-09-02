<script setup>
import Mostcocktail from "@/components/Mostcocktail.vue";
import RandomSlider from "@/components/SliderCocktail.vue";
import Footervue from "@/components/FooterIsFoo.vue";
</script>

<template>
  <div class="home">
    <RandomSlider />
    <Mostcocktail />
    <Footervue />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
