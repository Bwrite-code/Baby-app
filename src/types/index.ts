export interface Story {
  id: string;
  title: string;
  thumbnail: string;
  pages: StoryPage[];
  ageRange: string;
  duration: string;
}

export interface StoryPage {
  id: string;
  image: string;
  text: string;
  signLanguageText: string;
  interactiveElements?: InteractiveElement[];
}

export interface InteractiveElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  animation: string;
  sound?: string;
}

export interface DictionaryItem {
  id: string;
  word: string;
  category: string;
  image: string;
  signLanguageVideo: string;
  parentNotes: string;
  commonPhrases: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  items: DictionaryItem[];
}