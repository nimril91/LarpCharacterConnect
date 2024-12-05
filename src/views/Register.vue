<template>
  <div class="min-h-screen medieval-bg flex items-center justify-center">
    <Card class="w-[350px] fantasy-border bg-background/90">
      <template #header>
        <h3 class="text-2xl font-semibold leading-none tracking-tight text-2xl text-primary">Join the Quest</h3>
        <p class="text-sm text-muted-foreground">Create your legend in the LARP realm</p>
      </template>
      <template #content>
          <form>
            <div class="space-y-4">
              <Input type="text" placeholder="Chosen Name" class="medieval-input" />
              <Input type="email" placeholder="Magical Email" class="medieval-input" />
              <Input type="password" placeholder="Secret Passphrase" class="medieval-input" />
              <Input type="password" placeholder="Confirm Passphrase" class="medieval-input" />
            </div>
          </form>
      </template>
      <template #footer>
          <Button class="w-full medieval-button">Forge Your Destiny</Button>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>