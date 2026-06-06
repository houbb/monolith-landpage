<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown, Shield } from 'lucide-vue-next'
import GoldCard from '@/components/common/GoldCard.vue'

const { t } = useI18n()

const openSections = ref<Record<string, boolean>>({
  windows: false,
  macos: false,
  linux: false,
})

function toggle(section: string) {
  openSections.value[section] = !openSections.value[section]
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-2xl font-bold text-[#F5F1E8] mb-6" style="font-family: 'Space Grotesk', sans-serif">
      {{ t('download.installGuide') }}
    </h3>

    <!-- Windows -->
    <GoldCard>
      <button
        class="w-full flex items-center justify-between text-left"
        @click="toggle('windows')"
      >
        <span class="text-[#F5F1E8] font-medium">{{ t('download.installWindows') }}</span>
        <ChevronDown
          :size="18"
          class="text-[#9B9488] transition-transform duration-200"
          :class="{ 'rotate-180': openSections.windows }"
        />
      </button>
      <div v-if="openSections.windows" class="mt-4 space-y-2 text-sm text-[#9B9488]">
        <p>{{ t('download.installWindowsStep1') }}</p>
        <p>{{ t('download.installWindowsStep2') }}</p>
        <p>{{ t('download.installWindowsStep3') }}</p>
        <p>{{ t('download.installWindowsStep4') }}</p>
      </div>
    </GoldCard>

    <!-- macOS -->
    <GoldCard>
      <button
        class="w-full flex items-center justify-between text-left"
        @click="toggle('macos')"
      >
        <span class="text-[#F5F1E8] font-medium">{{ t('download.installMacos') }}</span>
        <ChevronDown
          :size="18"
          class="text-[#9B9488] transition-transform duration-200"
          :class="{ 'rotate-180': openSections.macos }"
        />
      </button>
      <div v-if="openSections.macos" class="mt-4 space-y-2 text-sm text-[#9B9488]">
        <p>{{ t('download.installMacosStep1') }}</p>
        <p>{{ t('download.installMacosStep2') }}</p>
        <p>{{ t('download.installMacosStep3') }}</p>
        <p>{{ t('download.installMacosStep4') }}</p>
      </div>
    </GoldCard>

    <!-- Linux -->
    <GoldCard>
      <button
        class="w-full flex items-center justify-between text-left"
        @click="toggle('linux')"
      >
        <span class="text-[#F5F1E8] font-medium">{{ t('download.installLinux') }}</span>
        <ChevronDown
          :size="18"
          class="text-[#9B9488] transition-transform duration-200"
          :class="{ 'rotate-180': openSections.linux }"
        />
      </button>
      <div v-if="openSections.linux" class="mt-4 space-y-2 text-sm text-[#9B9488]">
        <p>{{ t('download.installLinuxStep1') }}</p>
        <p>{{ t('download.installLinuxStep2') }}</p>
        <p>{{ t('download.installLinuxStep3') }}</p>
        <p class="mt-2">{{ t('download.installLinuxAlt') }}</p>
        <code class="block bg-[#0A0A0A] text-[#D8A84F] px-3 py-1.5 rounded text-xs">{{ t('download.installLinuxDeb') }}</code>
        <code class="block bg-[#0A0A0A] text-[#D8A84F] px-3 py-1.5 rounded text-xs">{{ t('download.installLinuxRpm') }}</code>
      </div>
    </GoldCard>

    <!-- Security note -->
    <div class="flex items-start gap-3 mt-6 p-4 bg-[rgba(216,168,79,0.04)] border border-[rgba(216,168,79,0.15)] rounded-lg">
      <Shield :size="18" class="text-[#D8A84F] shrink-0 mt-0.5" />
      <div>
        <p class="text-[#F5F1E8] text-sm font-medium">{{ t('download.securityNote') }}</p>
        <p class="text-[#9B9488] text-sm mt-1">{{ t('download.securityNoteDesc') }}</p>
      </div>
    </div>
  </div>
</template>
