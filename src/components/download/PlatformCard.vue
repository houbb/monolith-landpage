<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import { Monitor, Laptop, Terminal } from 'lucide-vue-next'
import GoldCard from '@/components/common/GoldCard.vue'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const props = defineProps<{
  platform: string
  system: string
  formats: readonly string[]
  description: string
  actionText: string
  icon: string
  isRecommended: boolean
}>()

const { t } = useI18n()

const iconMap: Record<string, Component> = {
  monitor: Monitor,
  laptop: Laptop,
  terminal: Terminal,
}

const IconComponent = computed(() => iconMap[props.icon] || Monitor)
</script>

<template>
  <div :class="{ 'relative': isRecommended }">
    <!-- Recommended badge -->
    <div
      v-if="isRecommended"
      class="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-0.5 bg-[#D8A84F] text-[#050505] text-xs font-semibold rounded-full"
    >
      {{ t('download.recommended') }}
    </div>

    <div :class="isRecommended ? 'ring-1 ring-[#D8A84F] shadow-[0_0_30px_rgba(216,168,79,0.15)] rounded-xl' : ''">
      <GoldCard :hoverable="true">
        <div class="flex flex-col items-center text-center gap-4">
          <!-- Icon -->
          <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-[rgba(216,168,79,0.1)]">
            <component :is="IconComponent" :size="24" class="text-[#D8A84F]" />
          </div>

          <!-- Platform name -->
          <h3 class="text-xl font-bold text-[#F5F1E8]" style="font-family: 'Space Grotesk', sans-serif">
            {{ platform }}
          </h3>

          <!-- System requirement -->
          <p class="text-[#9B9488] text-sm">{{ system }}</p>

          <!-- Format badges -->
          <div class="flex gap-2 flex-wrap justify-center">
            <span
              v-for="format in formats"
              :key="format"
              class="px-2.5 py-0.5 text-xs border border-[rgba(216,168,79,0.3)] text-[#D8A84F] rounded-full"
            >
              {{ format }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-[#9B9488] text-sm">{{ t(description) }}</p>

          <!-- Download button -->
          <GoldButton variant="primary" :href="SITE.releaseUrl">
            {{ t(actionText) }}
          </GoldButton>
        </div>
      </GoldCard>
    </div>
  </div>
</template>
