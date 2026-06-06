<script setup lang="ts">
import type { Component } from 'vue'
import GoldCard from '@/components/common/GoldCard.vue'
import GoldButton from '@/components/common/GoldButton.vue'

defineProps<{
  title: string
  description: string
  items: string[]
  icon: Component
  buttonText: string
  buttonHref: string
}>()
</script>

<template>
  <GoldCard :hoverable="true">
    <div class="flex flex-col gap-4 h-full">
      <!-- Icon + title -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(216,168,79,0.1)] shrink-0">
          <component :is="icon" :size="20" class="text-[#D8A84F]" />
        </div>
        <h3 class="text-lg font-bold text-[#F5F1E8]" style="font-family: 'Space Grotesk', sans-serif">
          {{ title }}
        </h3>
      </div>

      <!-- Description -->
      <p class="text-[#9B9488] text-sm">{{ description }}</p>

      <!-- Bullet list -->
      <ul class="space-y-2 flex-1">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-start gap-2 text-sm text-[#9B9488]"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-[#D8A84F] shrink-0 mt-1.5" />
          {{ item }}
        </li>
      </ul>

      <!-- Button -->
      <GoldButton variant="secondary" :href="buttonHref">
        {{ buttonText }}
      </GoldButton>
    </div>
  </GoldCard>
</template>
