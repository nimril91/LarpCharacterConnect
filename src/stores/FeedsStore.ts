import { defineStore } from 'pinia';
import { Feed } from '@/classes/FeedClass';
import type { Feed as FeedType } from '@/interfaces/Feed';

const defaultFeeds: FeedType[] = [
  {
    id: 1,
    senderId: 1,
    content: "Greetings, fellow adventurers! The Whispering Woods are teeming with magical energy. Exercise caution on your journeys.",
    timestamp: new Date().toISOString(),
    target: "general",
    event: null,
  },
  {
    id: 2,
    senderId: 2,
    content: "Attention all warriors! The annual Tournament of Blades will commence next full moon. Sharpen your skills and your swords!",
    timestamp: new Date().toISOString(),
    target: "Warriors Guild",
    event: "Tournament of Blades",
  },
  {
    id: 3,
    senderId: 3,
    content: "To my esteemed colleagues in the Mages' Circle: Our next gathering to discuss the anomalies in the ether will be held at the Crystal Tower.",
    timestamp: new Date().toISOString(),
    target: "Mages' Circle",
    event: "Ether Anomalies Discussion",
  },
];

const getFeedsFromLocalStorage = () => {
  let storedFeeds = JSON.parse(localStorage.getItem('feeds') || '[]');
  if(storedFeeds.length == 0) {
    storedFeeds = defaultFeeds.map((defaultFeed: FeedType) => new Feed(defaultFeed));
}
  return storedFeeds;
}

export const useFeedsStore = defineStore('feeds', {
  state: () => ({
    feeds: getFeedsFromLocalStorage() as Feed[]
  }),

  getters: {
    getFeedsByTarget: (state) => (target: string) => {
      return state.feeds.filter(feed => feed.target === target);
    }
  },

  actions: {
    addFeed(feed: Omit<FeedType, 'id' | 'timestamp'>) {
      const newFeed: Feed = new Feed({ ...feed, id: this.feeds.length + 1, timestamp: new Date().toISOString() });
      const updatedFeeds = [...this.feeds, newFeed];
      this.feeds = updatedFeeds;
      localStorage.setItem('feeds', JSON.stringify(updatedFeeds));
    }
  },
});