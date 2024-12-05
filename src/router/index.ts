import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import CharacterProfile from '@/views/CharacterProfile.vue'
import PlayerProfile from '@/views/PlayerProfile.vue'
import CharacterSelection from '@/views/CharacterSelection.vue'
import Feeds from '@/views/Feeds.vue'
import { usePlayerStore } from '@/stores/PlayerStore';

const publicRoutes = ['Login', 'Register', 'Home'];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/character/:id?',
      name: 'CharacterProfile',
      component: CharacterProfile,
    },
    {
      path: '/player',
      name: 'PlayerProfile',
      component: PlayerProfile,
    },
    {
      path: '/character-select',
      name: 'CharacterSelection',
      component: CharacterSelection,
    },
    {
      path: '/feeds',
      name: 'Feeds',
      component: Feeds,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const playerStore = usePlayerStore();
  if (!playerStore.currentPlayer && !publicRoutes.includes(to.name as string)) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
