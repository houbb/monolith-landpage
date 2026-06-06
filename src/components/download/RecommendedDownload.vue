<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Download } from 'lucide-vue-next'
import GoldButton from '@/components/common/GoldButton.vue'
import { SITE } from '@/config/site'

const { t } = useI18n()

const detectedOS = ref<string | null>(null)

function detectOS(): string | null {
  const ua = navigator.userAgent
  if (ua.includes('Win')) return 'Windows'
  if (ua.includes('Mac')) return 'macOS'
  if (ua.includes('Linux')) return 'Linux'
  return null
}

onMounted(() => {
  detectedOS.value = detectOS()
})
</script>

<template>
  <div class="bg-[rgba(216,168,79,0.06)] border border-[rgba(216,168,79,0.22)] rounded-xl p-6 mb-10">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <Download :size="20" class="text-[#D8A84F] shrink-0" />
        <p class="text-[#F5F1E8] text-sm">
          <template v-if="detectedOS">
            {{ t('download.recommendedDetected', { os: detectedOS }) }}
          </template>
          <template v-else>
            {{ t('download.recommendedGeneric') }}
          </template>
        </p>
      </div>
      <GoldButton variant="primary" :href="SITE.releaseUrl">
        <Download :size="16" class="mr-2" />
        {{ t('download.downloadNow') }}
      </GoldButton>
    </div>
  </div>
</template>
