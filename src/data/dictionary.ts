import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '🐾',
    color: 'bg-green-100 text-green-800',
    items: [
      {
        id: 'cat',
        word: 'Cat',
        category: 'animals',
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'cat-sign-demo',
        parentNotes: 'Use when pointing to cats in books or outside. Practice the sign during feeding time.',
        commonPhrases: ['Pretty cat', 'Soft cat', 'Cat says meow']
      },
      {
        id: 'dog',
        word: 'Dog',
        category: 'animals',
        image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'dog-sign-demo',
        parentNotes: 'Great first animal sign. Use when you see dogs during walks.',
        commonPhrases: ['Good dog', 'Big dog', 'Dog says woof']
      },
      {
        id: 'bird',
        word: 'Bird',
        category: 'animals',
        image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'bird-sign-demo',
        parentNotes: 'Point to birds outside or in picture books. Great for nature walks.',
        commonPhrases: ['Flying bird', 'Little bird', 'Bird sings']
      }
    ]
  },
  {
    id: 'toys',
    name: 'Toys',
    icon: '🧸',
    color: 'bg-pink-100 text-pink-800',
    items: [
      {
        id: 'ball',
        word: 'Ball',
        category: 'toys',
        image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'ball-sign-demo',
        parentNotes: 'Perfect for playtime signing. Use during rolling and throwing games.',
        commonPhrases: ['Roll ball', 'Throw ball', 'Big ball']
      },
      {
        id: 'teddy',
        word: 'Teddy Bear',
        category: 'toys',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'teddy-sign-demo',
        parentNotes: 'Comfort object signing. Great for bedtime routines.',
        commonPhrases: ['Soft teddy', 'Hug teddy', 'Teddy sleeps']
      }
    ]
  },
  {
    id: 'actions',
    name: 'Actions',
    icon: '🏃',
    color: 'bg-blue-100 text-blue-800',
    items: [
      {
        id: 'eat',
        word: 'Eat',
        category: 'actions',
        image: 'https://images.pexels.com/photos/1346417/pexels-photo-1346417.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'eat-sign-demo',
        parentNotes: 'Essential mealtime sign. Use before and during feeding.',
        commonPhrases: ['Time to eat', 'Eat more', 'All done eating']
      },
      {
        id: 'sleep',
        word: 'Sleep',
        category: 'actions',
        image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'sleep-sign-demo',
        parentNotes: 'Bedtime routine sign. Use during naptime and nighttime.',
        commonPhrases: ['Time to sleep', 'Baby sleeps', 'Sleep tight']
      }
    ]
  },
  {
    id: 'clothes',
    name: 'Clothes',
    icon: '👕',
    color: 'bg-purple-100 text-purple-800',
    items: [
      {
        id: 'hat',
        word: 'Hat',
        category: 'clothes',
        image: 'https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&w=400',
        signLanguageVideo: 'hat-sign-demo',
        parentNotes: 'Use when getting dressed or playing dress-up.',
        commonPhrases: ['Put on hat', 'Pretty hat', 'Hat on head']
      }
    ]
  }
];