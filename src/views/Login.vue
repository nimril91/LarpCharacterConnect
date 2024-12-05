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

const playerStore = usePlayerStore();
const router = useRouter();

const login = () => {
  playerStore.login();
  router.push('/character-select');
};
</script>