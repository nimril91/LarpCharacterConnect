<template>
  <div class="container mx-auto p-4">
    <Card>
      <template #header>
          <div class="flex items-center space-x-4">
            <AvatarRoot class="w-24 h-24">
              <AvatarImage :src="currentCharacter.image" :alt="currentCharacter.name" />
              <AvatarFallback>{{ currentCharacter.name[0] }}</AvatarFallback>
            </AvatarRoot>
            <div>
              <h3 class="text-2xl font-semibold leading-none tracking-tight text-3xl">{{ currentCharacter.name }}</h3>
              <p class="text-xl text-muted-foreground">{{ currentCharacter.race }} {{ currentCharacter.class }}</p>
            </div>
          </div>
      </template>
      <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">Characteristics</h3>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="(value, key) in currentCharacter.characteristics" :key="key" class="flex justify-between">
                  <span class="capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}:</span>
                  <span>{{ value }}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Talents</h3>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="(talent, index) in currentCharacter.talents" :key="index" variant="secondary">{{ talent }}</Badge>
              </div>
            </div>
          </div>
          <Separator class="my-4" />
          <div>
            <h3 class="text-xl font-semibold mb-2">Titles</h3>
            <ul class="list-disc list-inside">
              <li v-for="(title, index) in currentCharacter.titles" :key="index">{{ title }}</li>
            </ul>
          </div>
          <Separator class="my-4" />
          <div>
            <h3 class="text-xl font-semibold mb-2">Affiliations</h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="(affiliation, index) in currentCharacter.affiliations" :key="index" variant="outline">{{ affiliation }}</Badge>
            </div>
          </div>
          <Separator class="my-4" />
          <div>
            <h3 class="text-xl font-semibold mb-2">About</h3>
            <p class="text-muted-foreground">{{ currentCharacter.about }}</p>
          </div>
          <Separator class="my-4" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">Contacts</h3>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="(contact, index) in currentCharacter.contacts" :key="index" variant="secondary">{{ contact }}</Badge>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Events Participated</h3>
              <ul class="list-disc list-inside">
                <li v-for="(event, index) in currentCharacter.events" :key="index">{{ event }}</li>
              </ul>
            </div>
          </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import { AvatarRoot, AvatarImage, AvatarFallback, Separator } from 'radix-vue';
import Badge from '@/components/Badge.vue';
import { useCharacterStore } from '../stores/CharacterStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const characterStore = useCharacterStore();
const route = useRoute();
const characterId = route.params.id;

const currentCharacter = computed(() => {
  if (characterId) {
    return characterStore.characters.find(character => character.id == characterId) || characterStore.currentCharacter;
  }
  return characterStore.currentCharacter;
});
</script>