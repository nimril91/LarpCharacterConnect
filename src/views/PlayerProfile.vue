<template>
  <div class="container mx-auto p-4">
    <Card>
      <template #header>
          <div class="flex items-center space-x-4">
            <AvatarRoot class="w-24 h-24">
              <AvatarImage :src="player.image" :alt="player.name" />
              <AvatarFallback>{{ player.name[0] }}</AvatarFallback>
            </AvatarRoot>
            <div>
              <h3 class="text-2xl font-semibold leading-none tracking-tighttext-3xl">{{ player.name }}</h3>
              <p class="text-xl text-muted-foreground">{{ player.occupation }}</p>
            </div>
          </div>
      </template>
      <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">Player Information</h3>
              <div class="space-y-2">
                <p><span class="font-semibold">Age:</span> {{ player.age }}</p>
                <p><span class="font-semibold">Location:</span> {{ player.location }}</p>
                <p><span class="font-semibold">Years LARPing:</span> {{ player.yearsLARPing }}</p>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Favorite Genres</h3>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="(genre, index) in player.favoriteGenres" :key="index" variant="secondary">{{ genre }}</Badge>
              </div>
            </div>
          </div>
          <Separator class="my-4" />
          <div>
            <h3 class="text-xl font-semibold mb-2">About Me</h3>
            <p class="text-muted-foreground">{{ player.bio }}</p>
          </div>
          <Separator class="my-4" />
          <div>
            <h3 class="text-xl font-semibold mb-2">My Characters</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card v-for="character in player.characters" :key="character.id" contentClassName="p-4">
                <template #content>
                    <div class="flex items-center space-x-4 mb-2">
                      <AvatarRoot>
                        <AvatarImage :src="character.image" :alt="character.name" />
                        <AvatarFallback>{{ character.name[0] }}</AvatarFallback>
                      </AvatarRoot>
                      <div>
                        <h4 class="font-semibold">{{ character.name }}</h4>
                        <p class="text-sm text-muted-foreground">{{ character.race }} {{ character.class }}</p>
                      </div>
                    </div>
                    <p class="text-sm">{{ character.shortDescription }}</p>
                    <RouterLink :to="`/character/${character.id}`" class="text-sm text-blue-500 hover:underline mt-2 block">
                      View Full Profile
                    </RouterLink>
                </template>
              </Card>
            </div>
          </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import { AvatarRoot, AvatarImage, AvatarFallback, Separator } from "radix-vue";
import Badge from '@/components/Badge.vue';
import { RouterLink } from 'vue-router';
import { usePlayerStore } from '@/stores/PlayerStore';

const playerStore = usePlayerStore();
const player = ref(playerStore.expandedPlayer);
</script>