<template>
  <div class="carousel-container" >
    <div class="carousel-track">
      <div
          v-for="(slide, index) in visibleSlides"
          :key="slide.id"
          class="carousel-slide"
          :class="`position-${index}`"
          :style="slideStyles(index)"
      >
        <slot :slide="slide">
          <div>
            <img class="slide_img" alt="" :src="slide.src">
          </div>
        </slot>
      </div>
    </div>
    <div class="carousel-track skeleton" ref="carouselRef"></div>

    <!-- Carousel Dots -->
    <div class="carousel-dots">
      <span
          v-for="(dot, index) in visibleDots"
          :key="index"
          class="dot"
          :class="{ active: index === 2 }"
      />
    </div>

    <!-- Manual Controls (Optional) -->
<!--    <div class="controls">-->
<!--      <button @click="prevSlide">‹</button>-->
<!--      <button @click="nextSlide">›</button>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  slides: { type: Array, required: true },         // Slide data
  interval: { type: Number, default: 3000 },        // Auto-play interval
  direction: { type: String, default: 'right' },    // Direction: 'left' or 'right'
})

const currentIndex = ref(0)
const timer = ref(null)


const isDragging = ref(false)
const startX = ref(0)
const deltaX = ref(0)
const isPaused = ref(false)
const carouselRef = ref(null)


// Get 5 visible slides (with wrapping)
const visibleSlides = computed(() => {
  const total = props.slides.length
  const slides = []
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex.value + i + total) % total
    slides.push(props.slides[index])
  }

  return slides
})

// Dots (always 5, center one active)
const visibleDots = computed(() => {
  return Array.from({ length: 5 })
})

// Slide style (scaling and positioning)
const slideStyles = (index) => {
  const baseScale = [0.6, 0.8, 1.0, 0.8, 0.6]
  const baseTranslate = ['-180%', '-100%', '0%', '100%', '180%']

  return {
    transform: `translateX(${baseTranslate[index]}) scale(${baseScale[index]})`,
    zIndex: index === 2 ? 5 : 5 - Math.abs(index - 2),
  }
}

// Slide control
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

function prevSlide() {
  currentIndex.value =
      (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

// 自动播放
onMounted(() => {
  startAutoPlay()

  const el = carouselRef.value

  // Mouse Events
  el.addEventListener('mousedown', (e) => handleStart(e.clientX))
  el.addEventListener('mousemove', (e) => handleMove(e.clientX))
  el.addEventListener('mouseup', handleEnd)
  el.addEventListener('mouseleave', handleEnd)

  // Touch Events
  el.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX))
  el.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX))
  el.addEventListener('touchend', handleEnd)

  // Pause on hover
  el.addEventListener('mouseenter', () => (isPaused.value = true))
  el.addEventListener('mouseleave', () => (isPaused.value = false))
})

onBeforeUnmount(() => {
  stopAutoPlay()
})

// --- Auto-play Control ---
function startAutoPlay() {
  if (timer.value) return
  timer.value = setInterval(() => {
    if (!isPaused.value) {
      props.direction === 'right' ? nextSlide() : prevSlide()
    }
  }, props.interval)
}

function stopAutoPlay() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

// --- Mouse/Touch Slide Handling ---
function handleStart(x) {
  stopAutoPlay()
  isDragging.value = true
  startX.value = x
  deltaX.value = 0
}

function handleMove(x) {
  if (!isDragging.value) return
  deltaX.value = x - startX.value
}

function handleEnd() {
  if (!isDragging.value) return

  if (deltaX.value > 50) {
    // swipe right
    prevSlide()
  } else if (deltaX.value < -50) {
    // swipe left
    nextSlide()
  }

  isDragging.value = false
  deltaX.value = 0
  startAutoPlay()
}

</script>

