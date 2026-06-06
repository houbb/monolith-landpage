import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  function reveal(el: Ref<HTMLElement | null | undefined>) {
    onMounted(() => {
      if (el.value) {
        el.value.classList.add('scroll-reveal')
        observer?.observe(el.value)
      }
    })
  }

  return { reveal }
}
