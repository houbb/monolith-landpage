<script setup lang="ts">
withDefaults(defineProps<{
  hoverable?: boolean
}>(), {
  hoverable: true,
})
</script>

<template>
  <div
    class="rounded-xl border border-[rgba(216,168,79,0.22)] bg-[#111111] p-6 transition-all duration-300"
    :class="hoverable ? 'hover:border-[rgba(216,168,79,0.5)] hover:shadow-[0_0_30px_rgba(216,168,79,0.08)]' : ''"
  >
    <slot />
  </div>
</template>
