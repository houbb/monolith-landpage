<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section class="relative py-24 px-6 overflow-hidden" style="background: #050505">
    <!-- Subtle gold radial glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(216,168,79,0.1) 0%, transparent 70%)"
    />

    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <h2
        class="text-3xl md:text-5xl font-bold mb-6"
        style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
      >
        {{ t('downloadCta.title') }}
      </h2>
      <p class="text-lg mb-10" style="color: #9B9488">
        {{ t('downloadCta.subtitle') }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <GoldButton variant="primary" to="/download">
          {{ t('downloadCta.btnDownload') }}
        </GoldButton>
        <GoldButton variant="secondary" :href="SITE.releaseUrl">
          {{ t('downloadCta.btnAllVersions') }}
        </GoldButton>
      </div>
    </div>
  </section>
</template>
