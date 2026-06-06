<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { History } from 'lucide-vue-next'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import BackgroundGlow from '@/components/common/BackgroundGlow.vue'
import RecommendedDownload from '@/components/download/RecommendedDownload.vue'
import PlatformCard from '@/components/download/PlatformCard.vue'
import InstallGuide from '@/components/download/InstallGuide.vue'
import { DOWNLOAD, GITHUB_RELEASE_URL } from '@/config/download'

const { t } = useI18n()

function detectOS(): string | null {
  const ua = navigator.userAgent
  if (ua.includes('Win')) return 'Windows'
  if (ua.includes('Mac')) return 'macOS'
  if (ua.includes('Linux')) return 'Linux'
  return null
}

const detectedOS = detectOS()

const platforms = computed(() =>
  DOWNLOAD.platforms.map((p) => ({
    ...p,
    isRecommended: p.platform === detectedOS,
  }))
)
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-[#F5F1E8]">
    <SiteHeader />
    <BackgroundGlow intensity="low" />

    <main class="relative max-w-6xl mx-auto px-4 pt-28 pb-16">
      <SectionTitle :title="t('download.pageTitle')" :subtitle="t('download.pageSubtitle')" />

      <RecommendedDownload />

      <!-- Platform cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <PlatformCard
          v-for="platform in platforms"
          :key="platform.platform"
          :platform="platform.platform"
          :system="platform.system"
          :formats="platform.formats"
          :description="platform.description"
          :action-text="platform.actionText"
          :icon="platform.icon"
          :is-recommended="platform.isRecommended"
        />
      </div>

      <!-- Historical versions link -->
      <div class="text-center mb-16">
        <a
          :href="GITHUB_RELEASE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-[#9B9488] hover:text-[#D8A84F] transition-colors text-sm"
        >
          <History :size="16" />
          {{ t('download.viewAllVersions') }}
        </a>
      </div>

      <!-- Install guide -->
      <InstallGuide />
    </main>

    <SiteFooter />
  </div>
</template>
