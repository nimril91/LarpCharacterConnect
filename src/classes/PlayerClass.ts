import { useCharacterStore } from '@/stores/CharacterStore';
import type { Character } from '@/interfaces/Character';
import type { Player as PlayerType } from '@/interfaces/Player';

export class Player implements PlayerType {
  id: number;
  name: string;
  image: string;
  age: number;
  location: string;
  occupation: string;
  yearsLARPing: number;
  favoriteGenres: string[];
  bio: string;
  characterIds: number[];

  constructor(data: Partial<PlayerType>) {
    this.id = data.id ?? 0;
    this.name = data.name ?? '';
    this.image = data.image ?? '';
    this.age = data.age ?? 0;
    this.location = data.location ?? '';
    this.occupation = data.occupation ?? '';
    this.yearsLARPing = data.yearsLARPing ?? 0;
    this.favoriteGenres = data.favoriteGenres ?? [];
    this.bio = data.bio ?? '';
    this.characterIds = data.characterIds ?? [];
  }

  get characters() {
    const characterStore = useCharacterStore();
    return this.characterIds.map(id => characterStore.characters.find(character => character.id === id)) as Character[];
  }
}