<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import BackgroundGlow from '@/components/common/BackgroundGlow.vue'
import AuthorCard from '@/components/contact/AuthorCard.vue'
import { CONTACT } from '@/config/contact'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-[#F5F1E8]">
    <SiteHeader />
    <BackgroundGlow intensity="low" />

    <main class="relative max-w-4xl mx-auto px-4 pt-28 pb-16">
      <SectionTitle :title="t('contact.pageTitle')" :subtitle="t('contact.pageSubtitle')" />

      <!-- Author card -->
      <div class="mb-12">
        <AuthorCard />
      </div>

      <!-- Contact info: WeChat + Email -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <!-- Author WeChat -->
        <div
          class="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
          style="background: rgba(216,168,79,0.03); border: 1px solid rgba(216,168,79,0.12)"
        >
          <div class="rounded-lg overflow-hidden border border-[rgba(216,168,79,0.22)] bg-[#0A0A0A] p-2">
            <img
              src="/AUTHOR_WECHAT.jfif"
              :alt="t('contact.authorWechat.title')"
              class="w-auto h-auto max-w-full"
              style="height: auto; max-height: 180px;"
            />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#F5F1E8] mb-1" style="font-family: 'Space Grotesk', sans-serif">
              {{ t('contact.authorWechat.title') }}
            </h3>
            <p class="text-[#9B9488] text-sm">{{ t('contact.authorWechat.description') }}</p>
          </div>
        </div>

        <!-- WeChat Public Account -->
        <div
          class="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
          style="background: rgba(216,168,79,0.03); border: 1px solid rgba(216,168,79,0.12)"
        >
          <div class="rounded-lg overflow-hidden border border-[rgba(216,168,79,0.22)] bg-[#0A0A0A] p-2">
            <img
              src="/WECHAT.png"
              :alt="t('contact.wechatGroup.title')"
              class="w-auto h-auto max-w-full"
              style="height: auto; max-height: 180px;"
            />
          </div>
          <div>
            <h3 class="text-lg font-bold text-[#F5F1E8] mb-1" style="font-family: 'Space Grotesk', sans-serif">
              {{ t('contact.wechatGroup.title') }}
            </h3>
            <p class="text-[#9B9488] text-sm">{{ t('contact.wechatGroup.description') }}</p>
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
