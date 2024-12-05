
export interface Character {
  id: number;
  name: string;
  race: string;
  class: string;
  image: string;
  shortDescription: string;
  contacts: string[];
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
}