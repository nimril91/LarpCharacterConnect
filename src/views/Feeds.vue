<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-primary">Tavern Tales and Town Crier's Calls</h1>
    <ScrollAreaRoot class="h-[calc(100vh-200px)] pr-4">
      <Card v-for="feed in filteredFeeds" :key="feed.id" class="mb-4 fantasy-border">
        <template #header>
            <div class="flex items-center space-x-4">
              <AvatarRoot class="w-8 h-8 border-2 border-accent">
                <AvatarImage src="/placeholder.svg" :alt="feed.sender" />
                <AvatarFallback>{{ feed.sender[0] }}</AvatarFallback>
              </AvatarRoot>
              <div>
              <h3 class="text-2xl font-semibold leading-none tracking-tight text-lg">{{ feed.sender }}</h3>
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
import Card from '@/components/Card.vue';
import { AvatarRoot, AvatarImage, AvatarFallback, ScrollAreaRoot } from "radix-vue";
import Badge from '@/components/Badge.vue';

const characterStore = useCharacterStore();
const { currentCharacter } = characterStore;

const feeds = [
  {
    id: 1,
    sender: "Elara Moonwhisper",
    content: "Greetings, fellow adventurers! The Whispering Woods are teeming with magical energy. Exercise caution on your journeys.",
    timestamp: "2 hours ago",
    target: "general",
    event: null,
  },
  {
    id: 2,
    sender: "Grimlock Ironheart",
    content: "Attention all warriors! The annual Tournament of Blades will commence next full moon. Sharpen your skills and your swords!",
    timestamp: "1 day ago",
    target: "Warriors Guild",
    event: "Tournament of Blades",
  },
  {
    id: 3,
    sender: "Zephyr Stormborn",
    content: "To my esteemed colleagues in the Mages' Circle: Our next gathering to discuss the anomalies in the ether will be held at the Crystal Tower.",
    timestamp: "3 days ago",
    target: "Mages' Circle",
    event: "Ether Anomalies Discussion",
  },
];

const isRelevantMessage = (message) => {
  if (message.target === "general") return true;
  if (currentCharacter.value && (message.target === currentCharacter.value.class || message.target === currentCharacter.value.race)) return true;
  return false;
};

const filteredFeeds = computed(() => feeds.filter(isRelevantMessage));
</script>