<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Select Your Character</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="character in characters" :key="character.id">
        <template #header>
          <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ character.name }}</h3>
        </template>
        <template #content>
            <div class="flex items-center space-x-4 mb-4">
              <AvatarRoot class="w-16 h-16">
                <AvatarImage :src="character.image" :alt="character.name" />
                <AvatarFallback>{{ character.name[0] }}</AvatarFallback>
              </AvatarRoot>
              <div>
                <p class="font-semibold">{{ character.race }} {{ character.class }}</p>
                <p class="text-sm text-muted-foreground">{{ character.shortDescription }}</p>
              </div>
            </div>
            <Button @click="handleSelectCharacter(character)" class="w-full">
              Select Character
            </Button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { AvatarRoot, AvatarImage, AvatarFallback } from "radix-vue";
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import { useCharacterStore } from '../stores/CharacterStore';
import { usePlayerStore } from '@/stores/PlayerStore';

const characterStore = useCharacterStore();
const playerStore = usePlayerStore();
const { selectCharacter } = characterStore;
const router = useRouter();

const characters = computed(() => {
  return playerStore.currentPlayer.characters;
});

const handleSelectCharacter = (character) => {
  selectCharacter(character.id);
  router.push('/feeds');
};
</script>