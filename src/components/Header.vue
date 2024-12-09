<template>
  <header class="bg-primary text-primary-foreground p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold font-serif">LARP Connect</RouterLink>
      <nav v-if="currentPlayer">
        <ul class="flex space-x-4 items-center">
          <li v-if="currentCharacter" class="flex items-center space-x-2">
            <AvatarRoot class="w-8 h-8 border-2 border-accent">
              <AvatarImage :src="currentCharacter.image" :alt="currentCharacter.name" />
              <AvatarFallback class="bg-accent text-accent-foreground">{{ currentCharacter.name[0] }}</AvatarFallback>
            </AvatarRoot>
            <span class="text-sm"><span class="font-bold">{{ currentCharacter.name }}</span></span>
          </li>
          <li>
            <RouterLink to="/character-select" class="text-accent-foreground hover:underline">
              {{currentCharacter ? 'Switch' : 'Select'}} Character
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/feeds" class="flex items-center space-x-1 hover:text-accent-foreground">
              <span>Tavern Tales</span>
            </RouterLink>
          </li>
          <li v-if="currentCharacter"><RouterLink to="/character" class="hover:text-accent-foreground">About {{currentCharacter.name}}</RouterLink></li>
          <li><RouterLink to="/player" class="hover:text-accent-foreground">Your Saga</RouterLink></li>
          <li><Button variant="outline" class="medieval-button bg-accent" @click="handleLogout()">Logout</Button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue';
import Button from '@/components/Button.vue';
import { useCharacterStore } from '@/stores/CharacterStore';
import { usePlayerStore } from '@/stores/PlayerStore';

const router = useRouter();

const characterStore = useCharacterStore();
const playerStore = usePlayerStore();
const currentCharacter = computed(() => characterStore.currentCharacter);
const currentPlayer = computed(() => playerStore.currentPlayer);

const handleLogout = () => {
  playerStore.logout();
  router.push('/login');
};
</script>