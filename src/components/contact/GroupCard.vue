<script setup lang="ts">
import GoldCard from '@/components/common/GoldCard.vue'

defineProps<{
  title: string
  qrImage: string
  description: string
}>()
</script>

<template>
  <GoldCard>
    <div class="flex flex-col items-center text-center gap-4">
      <!-- QR code -->
      <div class="rounded-lg overflow-hidden border border-[rgba(216,168,79,0.22)] bg-[#0A0A0A] flex items-center justify-center p-2">
        <img
          v-if="qrImage"
          :src="qrImage"
          :alt="title"
          class="w-auto h-auto max-w-full"
          style="height: auto; width: auto; max-height: 160px;"
        />
        <span v-else class="text-[#9B9488] text-xs">QR Code</span>
      </div>

      <!-- Title + description -->
      <div>
        <h3 class="text-lg font-bold text-[#F5F1E8] mb-1" style="font-family: 'Space Grotesk', sans-serif">
          {{ title }}
        </h3>
        <p class="text-[#9B9488] text-sm">{{ description }}</p>
      </div>
    </div>
  </GoldCard>
</template>
