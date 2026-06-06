<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center mb-16">
    <h2
      class="text-3xl md:text-4xl font-bold mb-4"
      style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="text-lg max-w-2xl mx-auto"
      style="color: #9B9488"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
