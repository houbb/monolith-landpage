<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Mail, MessageCircle } from 'lucide-vue-next'
import GoldCard from '@/components/common/GoldCard.vue'
import { CONTACT } from '@/config/contact'

const { t } = useI18n()
</script>

<template>
  <GoldCard>
    <div class="flex flex-col md:flex-row gap-6 items-start">
      <!-- Left: avatar + name -->
      <div class="flex flex-col items-center gap-3 shrink-0">
        <img
          src="/AUTHOR.jpg"
          :alt="t('contact.authorName')"
          class="w-20 h-20 rounded-full object-cover border-2 border-[rgba(216,168,79,0.3)]"
        />
        <h3 class="text-lg font-bold text-[#F5F1E8]" style="font-family: 'Space Grotesk', sans-serif">
          {{ t('contact.authorName') }}
        </h3>
      </div>

      <!-- Right: description + contact info -->
      <div class="flex flex-col gap-4 flex-1">
        <p class="text-[#9B9488] text-sm leading-relaxed">{{ t('contact.authorDesc') }}</p>

        <!-- Contact info -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2 text-sm text-[#9B9488]">
            <Mail :size="16" class="text-[#D8A84F] shrink-0" />
            <span>{{ CONTACT.email }}</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-[#9B9488]">
            <MessageCircle :size="16" class="text-[#D8A84F] shrink-0" />
            <span>{{ t('contact.authorWechat.title') }}: {{ t('contact.authorName') }}</span>
          </div>
        </div>
      </div>
    </div>
  </GoldCard>
</template>
