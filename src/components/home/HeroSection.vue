<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BackgroundGlow from '@/components/common/BackgroundGlow.vue'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const { t } = useI18n()

const tags = [
  { key: 'tagNotes', delay: '0s' },
  { key: 'tagGraph', delay: '0.5s' },
  { key: 'tagAI', delay: '1s' },
  { key: 'tagSearch', delay: '1.5s' },
  { key: 'tagPlugins', delay: '2s' },
  { key: 'tagLocalFirst', delay: '2.5s' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: #050505">
    <BackgroundGlow intensity="high" />

    <!-- Gold particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute rounded-full"
        :style="{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          background: 'rgba(216,168,79,0.4)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particleFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }"
      />
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Title -->
      <h1
        class="text-6xl md:text-8xl font-bold mb-6"
        style="font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #D8A84F, #FFD985, #D8A84F); -webkit-background-clip: text; -webkit-text-fill-color: transparent"
      >
        {{ t('hero.title') }}
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style="color: #9B9488">
        {{ t('hero.subtitle') }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
        <GoldButton variant="primary" to="/download">
          {{ t('hero.btnDownload') }}
        </GoldButton>
        <GoldButton variant="secondary" :href="SITE.githubUrl">
          {{ t('hero.btnGithub') }}
        </GoldButton>
        <GoldButton variant="text" to="/contact">
          {{ t('hero.btnCommunity') }}
        </GoldButton>
      </div>

      <!-- Floating Tags -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <span
          v-for="tag in tags"
          :key="tag.key"
          class="px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:border-[rgba(216,168,79,0.5)] hover:shadow-[0_0_12px_rgba(216,168,79,0.15)]"
          style="color: #D8A84F; border-color: rgba(216,168,79,0.22); background: rgba(216,168,79,0.05); animation: tagFloat 3s ease-in-out infinite; animation-delay: tag.delay"
        >
          {{ t(`hero.${tag.key}`) }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) translateX(10px);
    opacity: 0.7;
  }
}

@keyframes tagFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
