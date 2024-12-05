import { defineStore } from 'pinia';
import type { Character } from '@/interfaces/Character';

const defaultCharacters: Character[] = [
  {
    id: 1,
    name: "Elara Moonwhisper",
    race: "Elf",
    class: "Ranger",
    image: "/placeholder.svg",
    shortDescription: "A skilled elven ranger with a deep connection to nature.",
    contacts: ["Thorin Oakenshield", "Galadriel"],
    events: ["Battle of the Five Armies", "Council of Elrond"],
    characteristics: {
      age: "247 years",
      height: "5'10\"",
      eyeColor: "Emerald green",
      hairColor: "Silver",
      distinguishingFeatures: "Leaf-shaped birthmark on left cheek"
    },
    talents: ["Archery", "Tracking", "Herbalism"],
    titles: ["Guardian of the Whispering Woods", "Emissary of the Elven Court"],
    affiliations: ["Elven Rangers", "Guardians of Nature"],
    about: "Elara Moonwhisper is a skilled elven ranger with a deep connection to nature. Born under the light of a full moon, she has dedicated her life to protecting the ancient forests and maintaining balance in the realm. Her keen senses and unparalleled archery skills make her a formidable ally and a respected figure among both elves and other races."
  },
  {
    id: 2,
    name: "Grimlock Ironheart",
    race: "Dwarf",
    class: "Warrior",
    image: "/placeholder.svg",
    shortDescription: "A stout dwarven warrior with an unbreakable spirit.",
    contacts: ["Borin Stonefist", "Durin Hammerhand"],
    events: ["Siege of Ironforge", "Battle of the Black Mountain"],
    characteristics: {
      age: "132 years",
      height: "4'5\"",
      eyeColor: "Dark brown",
      hairColor: "Black",
      distinguishingFeatures: "Scar across right eye"
    },
    talents: ["Smithing", "Axe wielding", "Stonecraft"],
    titles: ["Champion of Ironforge", "Defender of the Mountain"],
    affiliations: ["Dwarven Warriors", "Ironforge Clan"],
    about: "Grimlock Ironheart is a stout dwarven warrior known for his unbreakable spirit and unmatched strength. Raised in the halls of Ironforge, he has fought in numerous battles to protect his homeland. His skill with an axe and his resilience in the face of adversity have earned him great respect among his kin."
  },
  {
    id: 3,
    name: "Zephyr Stormborn",
    race: "Human",
    class: "Mage",
    image: "/placeholder.svg",
    shortDescription: "A prodigious human mage with a talent for elemental magic.",
    contacts: ["Aeliana Windrider", "Thalor the Wise"],
    events: ["Ritual of the Storm", "Battle of the Arcane Tower"],
    characteristics: {
      age: "29 years",
      height: "6'0\"",
      eyeColor: "Sky blue",
      hairColor: "Blonde",
      distinguishingFeatures: "Arcane runes on forearms"
    },
    talents: ["Elemental magic", "Alchemy", "Ancient languages"],
    titles: ["Master of the Arcane", "Stormcaller"],
    affiliations: ["Mage's Guild", "Order of the Storm"],
    about: "Zephyr Stormborn is a prodigious human mage with a natural talent for elemental magic. From a young age, he displayed an affinity for controlling the elements, earning him the title of Stormcaller. His dedication to mastering the arcane arts has made him a key figure in the Mage's Guild and a powerful ally in times of conflict."
  }
];

const getCharactersFromLocalStorage = () => {
  const storedCharacters = localStorage.getItem('characters');
  return storedCharacters ? JSON.parse(storedCharacters) as Character[] : defaultCharacters;
}

const getCurrentCharacterFromLocalStorage = () => {
  const storedCharacter = localStorage.getItem('currentCharacter');
  return storedCharacter ? JSON.parse(storedCharacter) as Character : null;
}

export const useCharacterStore = defineStore('character', {

  state: () => ({
    currentCharacter: getCurrentCharacterFromLocalStorage() as Character | null,
    characters: getCharactersFromLocalStorage() as Character[]
  }),

  actions: {
    selectCharacter(character: Character) {
      this.currentCharacter = character;
      localStorage.setItem('currentCharacter', JSON.stringify(character));
    },

    addCharacter(character: Omit<Character, 'id'>) {
      const newCharacter: Character = { ...character, id: Date.now() };
      const updatedCharacters = [...this.characters, newCharacter];
      this.characters = updatedCharacters;
      localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    }
  },
});