<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import DesignPhilosophy from '@/components/home/DesignPhilosophy.vue'
import AiIntroSection from '@/components/home/AiIntroSection.vue'
import PluginIntroSection from '@/components/home/PluginIntroSection.vue'
import CapabilitiesBento from '@/components/home/CapabilitiesBento.vue'
import ProductShowcaseImage from '@/components/home/ProductShowcaseImage.vue'
import ThemeShowcase from '@/components/home/ThemeShowcase.vue'
import DownloadCta from '@/components/home/DownloadCta.vue'
import CommunityCta from '@/components/home/CommunityCta.vue'
</script>

<template>
  <div class="min-h-screen bg-[#050505]">
    <SiteHeader />
    <main>
      <HeroSection />
      <DesignPhilosophy />
      <CapabilitiesBento />
      <AiIntroSection />
      <PluginIntroSection />
      <ProductShowcaseImage />
      <ThemeShowcase />
      <DownloadCta />
      <CommunityCta />
    </main>
    <SiteFooter />
  </div>
</template>
