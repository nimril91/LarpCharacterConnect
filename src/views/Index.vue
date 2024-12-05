<template>
  <div class="min-h-screen medieval-bg flex flex-col items-center justify-center text-foreground">
    <div class="bg-background/80 p-8 rounded-lg fantasy-border max-w-md w-full">
      <h1 class="text-5xl font-bold mb-6 text-center text-primary">Welcome to LARP Connect</h1>
      <p class="text-xl mb-8 text-center">Embark on epic adventures in the realm of Live Action Roleplay!</p>
      <div class="space-y-4">
        <Button asChild class="w-full medieval-button">
          <RouterLink to="/login">Enter the Realm</RouterLink>
        </Button>
        <Button asChild variant="outline" class="w-full medieval-button bg-accent">
          <RouterLink to="/register">Join the Quest</RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import { RouterLink } from 'vue-router';
</script>