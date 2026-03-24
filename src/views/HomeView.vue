<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-black text-text-primary flex flex-col items-center justify-center p-4">
    <h1 class="text-4xl font-display text-white mb-6">Trang chủ</h1>
    <RouterLink
      to="/breathe"
      class="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white"
    >
      Mở ứng dụng Tập Thở
    </RouterLink>
  </div>
</template>
