
import type { Character } from '@/interfaces/Character';

export interface Player {
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
  characters?: Character[];
}