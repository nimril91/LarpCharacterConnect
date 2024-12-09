import { useCharacterStore } from '@/stores/CharacterStore';
import type { Character } from '@/interfaces/Character';
import type { Feed as FeedType } from '@/interfaces/Feed';

export class Feed implements FeedType {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
  target: string;
  event: string | null;

  constructor(data: Partial<FeedType>) {
    this.id = data.id ?? 0;
    this.senderId = data.senderId ?? 0;
    this.content = data.content ?? '';
    this.timestamp = data.timestamp ?? '';
    this.target = data.target ?? '';
    this.event = data.event ?? null;
  }

  get sender() : Character {
    const characterStore = useCharacterStore();
    return characterStore.characters.find(character => character.id === this.senderId) as Character;
  }
}