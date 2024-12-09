<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-primary">Tavern Tales and Town Crier's Calls</h1>
    <ScrollAreaRoot class="h-[calc(100vh-200px)] pr-4">
      
    <GenericDialog :options="dialogOptions" @save="handleSave" headline="Add Feed">
      <template #trigger>
        <button class="btn-secondary">Say something</button>
      </template>
    </GenericDialog>
      <Card v-for="feed in filteredFeeds" :key="feed.id" class="mb-4 fantasy-border">
        <template #header>
            <div class="flex items-center space-x-4">
              <AvatarRoot class="w-8 h-8 border-2 border-accent">
                <AvatarImage :src="feed.sender.image ?? '/placeholder.svg'" :alt="feed.sender.name" />
                <AvatarFallback>Unkown Sender</AvatarFallback>
              </AvatarRoot>
              <div>
              <h3 class="text-2xl font-semibold leading-none tracking-tight text-lg">{{ feed.sender.name }}</h3>
                <p class="text-sm text-muted-foreground">{{ feed.timestamp }}</p>
              </div>
            </div>
        </template>
        <template #content>
            <p class="mb-2">{{ feed.content }}</p>
            <div class="flex space-x-2">
              <Badge v-if="feed.target !== 'general'" variant="secondary" class="medieval-badge">
                {{ feed.target }}
              </Badge>
              <Badge v-if="feed.event" variant="outline" class="medieval-badge">
                {{ feed.event }}
              </Badge>
            </div>
        </template>
      </Card>
    </ScrollAreaRoot>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCharacterStore } from '../stores/CharacterStore';
import { useFeedsStore } from '../stores/FeedsStore';
import Card from '@/components/Card.vue';
import { AvatarRoot, AvatarImage, AvatarFallback, ScrollAreaRoot } from "radix-vue";
import Badge from '@/components/Badge.vue';
import GenericDialog from '@/components/GenericDialog.vue';

const characterStore = useCharacterStore();
const { currentCharacter } = characterStore;

const feedsStore = useFeedsStore();
const { getFeedsByTarget } = feedsStore;

const filteredFeeds = computed(() => {
  // if (currentCharacter.value) {
  //   return [
  //     ...getFeedsByTarget('general'),
  //     ...getFeedsByTarget(currentCharacter.value.class),
  //     ...getFeedsByTarget(currentCharacter.value.race)
  //   ];
  // }
  return getFeedsByTarget('general');
});

const dialogOptions = [
  { key: 'content', type: 'textarea', default: '' },
  { key: 'target', type: 'text', default: 'general' },
  { key: 'event', type: 'text', default: '' }
];

const handleSave = (data) => {
  const newFeed = {
    senderId: currentCharacter.id,
    ...data
  };
  feedsStore.addFeed(newFeed);
};
</script>