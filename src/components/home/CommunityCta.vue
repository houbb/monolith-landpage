<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoldButton from '@/components/common/GoldButton.vue'
import { CONTACT } from '@/config/contact'

const { t } = useI18n()
</script>

<template>
  <section class="relative py-24 px-6" style="background: #0A0A0A">
    <div class="max-w-3xl mx-auto text-center">
      <h2
        class="text-3xl md:text-4xl font-bold mb-6"
        style="font-family: 'Space Grotesk', sans-serif; color: #F5F1E8"
      >
        {{ t('communityCta.title') }}
      </h2>
      <p class="text-lg mb-10" style="color: #9B9488">
        {{ t('communityCta.subtitle') }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-6">
        <GoldButton variant="text" to="/contact">
          {{ t('communityCta.btnContact') }}
        </GoldButton>
        <GoldButton variant="text" to="/contact">
          {{ t('communityCta.btnBeta') }}
        </GoldButton>
        <GoldButton variant="text" :href="CONTACT.githubIssues">
          {{ t('communityCta.btnFeedback') }}
        </GoldButton>
      </div>
    </div>
  </section>
</template>
