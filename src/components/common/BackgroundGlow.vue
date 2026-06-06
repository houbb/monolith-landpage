<script setup lang="ts">
withDefaults(defineProps<{
  intensity?: 'low' | 'medium' | 'high'
}>(), {
  intensity: 'medium',
})

const opacityMap: Record<string, string> = {
  low: '0.08',
  medium: '0.15',
  high: '0.25',
}
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
      :style="{
        background: `radial-gradient(circle, rgba(216,168,79,${opacityMap[intensity]}) 0%, transparent 70%)`,
      }"
    />
  </div>
</template>
