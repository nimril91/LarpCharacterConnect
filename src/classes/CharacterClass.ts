import { useFeedsStore } from '@/stores/FeedsStore';
import { useCharacterStore } from '@/stores/CharacterStore';
import type { Feed } from '@/interfaces/Feed';
import type { Character as CharacterType } from '@/interfaces/Character';

export class Character implements CharacterType {
  id: number;
  name: string;
  race: string;
  class: string;
  image: string;
  shortDescription: string;
  contacts: (string | number)[];
  events: string[];
  characteristics: {
    age: string;
    height: string;
    eyeColor: string;
    hairColor: string;
    distinguishingFeatures: string;
  };
  talents: string[];
  titles: string[];
  affiliations: string[];
  about: string;

  constructor(data: Partial<CharacterType>) {
    this.id = data.id ?? 0;
    this.name = data.name ?? '';
    this.race = data.race ?? '';
    this.class = data.class ?? '';
    this.image = data.image ?? '';
    this.shortDescription = data.shortDescription ?? '';
    this.contacts = data.contacts ?? [];
    this.events = data.events ?? [];
    this.characteristics = {
      age: data.characteristics?.age ?? '',
      height: data.characteristics?.height ?? '',
      eyeColor: data.characteristics?.eyeColor ?? '',
      hairColor: data.characteristics?.hairColor ?? '',
      distinguishingFeatures: data.characteristics?.distinguishingFeatures ?? ''
    };
    this.talents = data.talents ?? [];
    this.titles = data.titles ?? [];
    this.affiliations = data.affiliations ?? [];
    this.about = data.about ?? '';
  }

  get posts() {
    const feedsStore = useFeedsStore();
    return feedsStore.feeds.filter(feed => feed.senderId === this.id) as Feed[];
  }

  get linkedContacts(): (string | CharacterType)[] {
    const characterStore = useCharacterStore();
    return this.contacts.map((contact: string|number) => {
      if (typeof contact === 'number') {
        return characterStore.characters.find(character => character.id === contact) || contact.toString();
      }
      return contact as string;
    });
  }
}