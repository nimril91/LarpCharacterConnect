import { defineStore } from 'pinia';
import { Player } from '@/classes/PlayerClass';
import type { Player as PlayerType } from '@/interfaces/Player';
import { useCharacterStore } from '@/stores/CharacterStore';

const exampleData: PlayerType[] = [
  {
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
  },
  {
    id: 2,
    name: "John Doe",
    image: "/placeholder.svg",
    age: 35,
    location: "New York, NY",
    occupation: "Graphic Designer",
    yearsLARPing: 10,
    favoriteGenres: ["Sci-Fi", "Horror"],
    bio: "A veteran LARPer with a knack for creating visually stunning costumes and props. Loves to dive deep into character backstories.",
    characterIds: [4, 5, 6]
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "/placeholder.svg",
    age: 22,
    location: "Austin, TX",
    occupation: "Student",
    yearsLARPing: 2,
    favoriteGenres: ["Fantasy", "Historical"],
    bio: "New to the LARPing scene but eager to learn and grow. Enjoys the camaraderie and creativity that LARPing offers.",
    characterIds: [7, 8]
  }
];

const getPlayerFromLocalStorage = () => {
  const storedPlayer = localStorage.getItem('player');
  return storedPlayer ? new Player(JSON.parse(storedPlayer)) : null;
}

export const usePlayerStore = defineStore('player', {
  state: () => ({
    currentPlayer: getPlayerFromLocalStorage() as Player | null
  }),

  getters: {
    expandedPlayer(state) {
      return state.currentPlayer;
    }
  },

  actions: {
    updatePlayer(player: Player) {
      this.currentPlayer = new Player(player);
      localStorage.setItem('player', JSON.stringify(player));
    },
    logout() {
      const characterStore = useCharacterStore();
      this.currentPlayer = null;
      localStorage.removeItem('player');
      characterStore.selectCharacter(-1);
    },
    login(playerId?: number) {
      let player;
      if (playerId) {
        player = exampleData.find(p => p.id === playerId);
      } else {
        player = exampleData[Math.floor(Math.random() * exampleData.length)];
      }
      if (player) {
        this.currentPlayer = new Player(player);
        localStorage.setItem('player', JSON.stringify(this.currentPlayer));
      }
    }
  }
});