import { defineStore } from 'pinia';
import { Character } from '@/classes/CharacterClass';
import type { Character as CharacterType } from '@/interfaces/Character';

const defaultCharacters: CharacterType[] = [
  {
    id: 1,
    name: "Elara Moonwhisper",
    race: "Elf",
    class: "Ranger",
    image: "/placeholder.svg",
    shortDescription: "A skilled elven ranger with a deep connection to nature.",
    contacts: [2, "Galadriel"],
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
    contacts: [1, "Durin Hammerhand"],
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
  },
  {
    id: 4,
    name: "Lyria Starfire",
    race: "Elf",
    class: "Sorceress",
    image: "/placeholder.svg",
    shortDescription: "A mystical elven sorceress with a command over the stars.",
    contacts: ["Eldrin Moonshadow", "Thalindra Brightspear"],
    events: ["Celestial Convergence", "War of the Ancients"],
    characteristics: {
      age: "315 years",
      height: "5'9\"",
      eyeColor: "Silver",
      hairColor: "Golden",
      distinguishingFeatures: "Star-shaped birthmark on forehead"
    },
    talents: ["Star magic", "Enchanting", "Divination"],
    titles: ["Starcaller", "Keeper of the Celestial Tome"],
    affiliations: ["Celestial Order", "Elven Council"],
    about: "Lyria Starfire is a mystical elven sorceress known for her command over the stars. Her deep knowledge of celestial magic has made her a revered figure among the elves and a powerful force in the realm."
  },
  {
    id: 5,
    name: "Thorin Stonehelm",
    race: "Dwarf",
    class: "Paladin",
    image: "/placeholder.svg",
    shortDescription: "A noble dwarven paladin with a heart of gold.",
    contacts: ["Gimli Ironfoot", "Balin Stonefist"],
    events: ["Defense of the Sacred Mountain", "Crusade of Light"],
    characteristics: {
      age: "150 years",
      height: "4'8\"",
      eyeColor: "Blue",
      hairColor: "Red",
      distinguishingFeatures: "Golden armor with intricate engravings"
    },
    talents: ["Holy magic", "Swordsmanship", "Leadership"],
    titles: ["Protector of the Sacred Mountain", "Champion of Light"],
    affiliations: ["Order of the Golden Shield", "Dwarven Paladins"],
    about: "Thorin Stonehelm is a noble dwarven paladin known for his unwavering dedication to justice and his heart of gold. His holy magic and combat prowess make him a beacon of hope in dark times."
  },
  {
    id: 6,
    name: "Aria Windrider",
    race: "Human",
    class: "Bard",
    image: "/placeholder.svg",
    shortDescription: "A charismatic human bard with a gift for storytelling.",
    contacts: ["Lysandra Nightingale", "Dorian Silverstring"],
    events: ["Festival of Songs", "Rebellion of the Free Folk"],
    characteristics: {
      age: "25 years",
      height: "5'6\"",
      eyeColor: "Green",
      hairColor: "Brown",
      distinguishingFeatures: "Lute with intricate carvings"
    },
    talents: ["Music", "Storytelling", "Persuasion"],
    titles: ["Voice of the Free Folk", "Minstrel of the Realm"],
    affiliations: ["Bard's College", "Free Folk"],
    about: "Aria Windrider is a charismatic human bard known for her gift of storytelling and her enchanting music. Her songs inspire courage and hope, making her a beloved figure among the people."
  },
  {
    id: 7,
    name: "Kael Firebrand",
    race: "Orc",
    class: "Shaman",
    image: "/placeholder.svg",
    shortDescription: "A fierce orc shaman with a deep connection to the elements.",
    contacts: ["Gorak Bloodfist", "Shara Stormcaller"],
    events: ["Ritual of the Ancestors", "Battle of the Burning Plains"],
    characteristics: {
      age: "40 years",
      height: "6'5\"",
      eyeColor: "Amber",
      hairColor: "Black",
      distinguishingFeatures: "Tribal tattoos covering arms"
    },
    talents: ["Elemental magic", "Healing", "Spirit communication"],
    titles: ["Spirit Walker", "Keeper of the Ancestral Flame"],
    affiliations: ["Orcish Shamans", "Tribe of the Burning Plains"],
    about: "Kael Firebrand is a fierce orc shaman known for his deep connection to the elements and his powerful magic. His wisdom and strength make him a respected leader among his tribe."
  },
  {
    id: 8,
    name: "Seraphina Lightbringer",
    race: "Human",
    class: "Cleric",
    image: "/placeholder.svg",
    shortDescription: "A devoted human cleric with a gift for healing.",
    contacts: ["Brother Alden", "Sister Miriam"],
    events: ["Plague of Shadows", "Siege of the Holy City"],
    characteristics: {
      age: "32 years",
      height: "5'7\"",
      eyeColor: "Hazel",
      hairColor: "Auburn",
      distinguishingFeatures: "Holy symbol tattoo on right wrist"
    },
    talents: ["Healing magic", "Exorcism", "Herbalism"],
    titles: ["Lightbringer", "Healer of the Holy City"],
    affiliations: ["Order of the Light", "Healers of the Holy City"],
    about: "Seraphina Lightbringer is a devoted human cleric known for her gift of healing and her unwavering faith. Her compassion and dedication to helping others have made her a revered figure in the Holy City."
  }
];

const getCharactersFromLocalStorage = () => {
  const storedCharacters = localStorage.getItem('characters');
  return storedCharacters ? JSON.parse(storedCharacters).map((char: any) => new Character(char)) : defaultCharacters.map(char => new Character(char));
}

const getCurrentCharacterFromLocalStorage = () => {
  const storedCharacterID = localStorage.getItem('currentCharacterID');
  const characters = getCharactersFromLocalStorage();
  return characters.find((character: CharacterType) => character.id === Number(storedCharacterID)) || null;
}

export const useCharacterStore = defineStore('character', {

  state: () => ({
    currentCharacter: getCurrentCharacterFromLocalStorage() as Character | null,
    characters: getCharactersFromLocalStorage() as Character[]
  }),

  actions: {
    selectCharacter(characterID: number) {
      this.currentCharacter = this.characters.find(character => character.id === characterID) || null;
      localStorage.setItem('currentCharacterID', characterID.toString());
    },

    addCharacter(character: Omit<Character, 'id'>) {
      const newCharacter: Character = new Character({ ...character, id: Date.now() });
      const updatedCharacters = [...this.characters, newCharacter];
      this.characters = updatedCharacters;
      localStorage.setItem('characters', JSON.stringify(updatedCharacters));
    }
  },
});