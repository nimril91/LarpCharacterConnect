import { defineStore } from 'pinia';
import type { Player } from '@/interfaces/Player';
import { useCharacterStore } from '@/stores/CharacterStore';
import type { Character } from '@/interfaces/Character';

const exampleData: Player = {
  id: 1,
  name: "Sarah Johnson",
  image: "/placeholder.svg",
  age: 28,
  location: "Seattle, WA",
  occupation: "Software Engineer",
  yearsLARPing: 5,
  favoriteGenres: ["Fantasy", "Post-Apocalyptic", "Steampunk"],
  bio: "Passionate LARPer with a love for immersive storytelling and character development. Always excited to explore new worlds and meet fellow enthusiasts!",
  characterIds: [1, 2, 3]
};

const getPlayerFromLocalStorage = () => {
  const storedPlayer = localStorage.getItem('player');
  return storedPlayer ? JSON.parse(storedPlayer) as Player : null;
}

export const usePlayerStore = defineStore('player', {
  state: () => ({
    currentPlayer: getPlayerFromLocalStorage() as Player|null
  }),

  getters: {
    expandedPlayer(state) {
      const characterStore = useCharacterStore();
      let player = { ...state.currentPlayer };
      player.characters = state.currentPlayer?.characterIds.map(id => characterStore.characters.find(character => character.id === id)) as Character[];
      return player;
    }
  },

  actions: {
    updatePlayer(player: Player) {
      this.currentPlayer = player;
      localStorage.setItem('player', JSON.stringify(player));
    },
    logout() {
      this.currentPlayer = null;
      localStorage.removeItem('player');
    },
    login() {
      this.currentPlayer = exampleData;
      localStorage.setItem('player', JSON.stringify(exampleData));
    }
  }
});