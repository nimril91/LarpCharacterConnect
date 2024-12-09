<template>
  <div class="min-h-screen medieval-bg flex items-center justify-center">
    <Card class="w-[350px] fantasy-border bg-background/90" titleClassName="text-2xl text-primary">
      <template #title>
        Enter the Realm
      </template>
      <template #description>
        Unlock the secrets of the LARP realm
      </template>
      <template #content>
          <form>
            <div class="space-y-4">
              <Input type="email" placeholder="Magical Email" class="medieval-input" />
              <Input type="password" placeholder="Secret Passphrase" class="medieval-input" />
              <select v-model="selectedPlayerId" class="medieval-input">
                <option v-for="player in players" :key="player.id" :value="player.id">
                  {{ player.name }}
                </option>
              </select>
            </div>
          </form>
      </template>
      <template #footer>
          <Button class="w-full medieval-button" @click="login">
            Unlock the Gates
          </Button>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { usePlayerStore } from '@/stores/PlayerStore';
import { useRouter } from 'vue-router';
import Card from '@/components/Card.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue';

const playerStore = usePlayerStore();
const router = useRouter();

const players = ref([
  { id: 1, name: "Sarah Johnson" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Emily Davis" }
]);

const selectedPlayerId = ref(players.value[0].id);

const login = () => {
  playerStore.login(selectedPlayerId.value);
  router.push('/character-select');
};
</script>