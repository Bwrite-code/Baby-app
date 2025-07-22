import { Story } from '../types';
import babyHugTeddy2 from '../assets/baby hug teddy2.jpg';
import babyHugTeddy from '../assets/baby hug teddy.jpg';
import BabyAndTheSun from '../assets/babyandthesun.jpg';
import BabyRidesBoat from '../assets/babyridesboat.jpg';
import BabyTeddyTree from '../assets/babyteddytree.jpg';
import BabyTeddyWalk from '../assets/babyteddywalk.jpg';
import LetsExplore from '../assets/letsexplore.jpg';
import TeddyClimbHill from '../assets/teddyclimbhill.jpg';
import Home from '../assets/home.png';
import Iloveu from '../assets/iloveu.jpg';
import SnuggleTime from '../assets/snuggletime.jpg';
import BabyandFlower from '../assets/babyandflower.jpg';

import mouseAndLionThumbnail from '../assets/lion_and_mouse/mouse_and_lion_thumbnail.jpg';
import iLoveYouLion from '../assets/lion_and_mouse/I_love_u_lion.jpg';
import lionGrowlAtMouse from '../assets/lion_and_mouse/lion_growl_at_mouse.jpg';
import lionHugMouse from '../assets/lion_and_mouse/lion_hug_mouse.jpg';
import lionLaughMockingly from '../assets/lion_and_mouse/lion_laugh_mockingly.jpg';
import lionLookMousePitifully from '../assets/lion_and_mouse/lion_look_mouse_pitifully.jpg';
import lionShoutForHelp from '../assets/lion_and_mouse/lion_shouted_for_help.jpg';
import lionUnderTree from '../assets/lion_and_mouse/lion_under_tree.jpg';
import liveHappilyEverAfter from '../assets/lion_and_mouse/live happily ever after.jpg';
import moralLesson from '../assets/lion_and_mouse/moral_lesson.png';
import mouseAndLionDepart from '../assets/lion_and_mouse/mouse_and_lion_depart.jpg';
import mouseBegLion from '../assets/lion_and_mouse/mouse_beg_lion.jpg';
import mouseChewRope from '../assets/lion_and_mouse/mouse_chew_rope.jpg';
import mouseRunToHelpLion from '../assets/lion_and_mouse/mouse_run_to_help_lion.jpg';
import mouseWithLion from '../assets/lion_and_mouse/mouse_with_lion.jpg';
import lionWasTrapped from '../assets/lion_and_mouse/lion_was_trapped.jpg';

export const stories: Story[] = [
  {
    id: 'teddy-bear-adventure',
    title: 'Teddy Bear\'s Big Adventure',
    thumbnail: babyHugTeddy2,
    ageRange: '6-18 months',
    duration: '3-5 minutes',
    pages: [
      {
        id: 'page-1',
        image: babyHugTeddy,
        text: 'Baby hugs Teddy. They are best friends!',
        signLanguageText: 'BABY HUGS TEDDYKE UP',
        interactiveElements: [
          {
            id: 'teddy-eye',
            x: 45,
            y: 30,
            width: 10,
            height: 8,
            animation: 'blink'
          }
        ]
      },
      {
        id: 'page-2',
        image: LetsExplore,
        text: "Teddy wants to go! Baby says, Let’s explore!",
        signLanguageText: 'TEDDY BEAR GO OUTSIDE',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-3',
        image: BabyTeddyWalk,
        text: 'Through the forest, hand in paw, they walk together',
        signLanguageText: 'TEDDY WALK WITH BABY',
        interactiveElements: [
          {
            id: 'friend-wave',
            x: 60,
            y: 35,
            width: 12,
            height: 15,
            animation: 'wave'
          }
        ]
      },
      {
        id: 'page-4',
        image: BabyTeddyTree,
        text: 'Peek-a-boo behind the tree! Baby giggles softly',
        signLanguageText: 'PLAY TOGETHER HAPPY',
        interactiveElements: [
          {
            id: 'play-ball',
            x: 40,
            y: 60,
            width: 15,
            height: 15,
            animation: 'bounce'
          }
        ]
      },
      {
        id: 'page-5',
        image: BabyRidesBoat,
        text: 'Splash! Teddy sits on the boat. Baby rows gently',
        signLanguageText: 'TEDDY BEAR GO OUTSIDE',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-6',
        image: TeddyClimbHill,
        text: 'Up the hill, step by step. ‘Hold on, Teddy!',
        signLanguageText: 'TEDDY HOLD BABY',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-7',
        image: BabyAndTheSun,
        text: 'They reach the top. The sun is smiling',
        signLanguageText: 'TEDDY AND BABY LOVE THE SUN',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-8',
        image: BabyandFlower,
        text: 'Teddy looks at flowers. Baby smells one too',
        signLanguageText: 'TEDDY AND BABY SMELL FLOWERS',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-9',
        image: Home,
        text: 'Time to go home. Baby holds Teddy tight',
        signLanguageText: 'TEDDY AND BABY GO HOME',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-10',
        image: SnuggleTime,
        text: "Snuggle time now. I love you, Teddy!",
        signLanguageText: 'BABY HUG TEDDY BEAR',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
      {
        id: 'page-11',
        image: Iloveu,
        text: 'I am proud of you TEDDY! ❤️',
        signLanguageText: 'TEDDY BEAR GO OUTSIDE',
        interactiveElements: [
          {
            id: 'door',
            x: 70,
            y: 40,
            width: 15,
            height: 25,
            animation: 'open'
          }
        ]
      },
    ]
  },
  
  // MoveRight. Lion and the Little Mouse
  {
    id: 'colorful-shapes',
    title: 'Mr. Lion and the Little Mouse',
    thumbnail: mouseAndLionThumbnail,
    ageRange: '3-12 months',
    duration: '2-3 minutes',
    pages: [
      {
        id: 'shapes-1',
        image: lionUnderTree,
        text: 'Mr. Lion is sleeping under a tree\nHe snores, ZZZ...ZZZ...',
        signLanguageText: 'RED CIRCLE BOUNCE',
        interactiveElements: [
          {
            id: 'red-circle',
            x: 50,
            y: 50,
            width: 20,
            height: 20,
            animation: 'bounce'
          }
        ]
      },
      {
        id: 'shapes-2',
        image: mouseWithLion,
        text: 'Little Mouse runs over Mr. Lion’s paw.',
        signLanguageText: 'LION',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-3',
        image: lionGrowlAtMouse,
        text: 'ROAR! Who’s that? Mr. Lion growls\nLittle mouse shake with fear',
        signLanguageText: 'MOUSE',
        interactiveElements: [
          {
            id: 'yellow-triangle',
            x: 70,
            y: 35,
            width: 16,
            height: 16,
            animation: 'wiggle'
          }
        ]
      },
      {
        id: 'shapes-4',
        image: mouseBegLion,
        text: "Please don't eat me! Begged little mouse",
        signLanguageText: 'LION',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-5',
        image: lionLookMousePitifully,
        text: 'Mr. Lion looks at little mouse pitifully\nPlease let me go\nmaybe I can help you one day!Little mouse pleaded',
        signLanguageText: 'LITTLE MOUSE',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-6',
        image: lionLaughMockingly,
        text: 'You? Help me?Ha ha!\nMr. Lion laughs mockingly at Little mouse',
        signLanguageText: 'LAUGH',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-7',
        image: mouseAndLionDepart,
        text: 'Mr. Lion let Little Mouse go\nShe ran back into the forest',
        signLanguageText: 'LITTLE MOUSE',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-8',
        image: lionWasTrapped,
        text: 'Later, Mr. Lion stepped into a net and was trapped',
        signLanguageText: 'TRAPPED',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-9',
        image: lionShoutForHelp,
        text: 'Help! I’m stuck! Mr. Lion shouted for help',
        signLanguageText: 'LION SHOUT',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-10',
        image: mouseRunToHelpLion,
        text: "Little mouse hears Mr. Lion's cry\nShe runs fast to help!",
        signLanguageText: 'BLUE SQUARE SPIN',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-11',
        image: mouseChewRope,
        text: 'Little Mouse chews the rope with her tiny teeth\nSnap! Snap! Lion is free!',
        signLanguageText: 'SPIN',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-12',
        image: lionHugMouse,
        text: 'Thank you, little friend, says Mr. Lion',
        signLanguageText: 'THANK YOU',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-13',
        image: iLoveYouLion,
        text: 'Thank you too Mr. Lion, says Little mouse',
        signLanguageText: 'THANKS',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-14',
        image: liveHappilyEverAfter,
        text: 'Mr. Lion and Little Mouse became best friend in the forest',
        signLanguageText: 'Forest',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      },
      {
        id: 'shapes-15',
        image: moralLesson,
        text: 'Moral Lesson',
        signLanguageText: 'LESSON',
        interactiveElements: [
          {
            id: 'blue-square',
            x: 30,
            y: 40,
            width: 18,
            height: 18,
            animation: 'spin'
          }
        ]
      }
      
    ]     
  },
  {
    id: 'hungry-caterpillar',
    title: 'The Very Hungry Caterpillar',
    thumbnail: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '12-24 months',
    duration: '4-6 minutes',
    pages: [
      {
        id: 'caterpillar-1',
        image: 'https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Little caterpillar is hungry',
        signLanguageText: 'CATERPILLAR HUNGRY',
        interactiveElements: [
          {
            id: 'caterpillar-mouth',
            x: 45,
            y: 55,
            width: 8,
            height: 6,
            animation: 'chew'
          }
        ]
      },
      {
        id: 'caterpillar-2',
        image: 'https://images.pexels.com/photos/1346417/pexels-photo-1346417.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Caterpillar eats an apple',
        signLanguageText: 'EAT APPLE',
        interactiveElements: [
          {
            id: 'apple-bite',
            x: 60,
            y: 40,
            width: 12,
            height: 12,
            animation: 'shrink'
          }
        ]
      },
      {
        id: 'caterpillar-3',
        image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Now caterpillar is big and happy',
        signLanguageText: 'BIG HAPPY CATERPILLAR',
        interactiveElements: [
          {
            id: 'big-caterpillar',
            x: 50,
            y: 50,
            width: 25,
            height: 15,
            animation: 'grow'
          }
        ]
      }
    ]
  },
  {
    id: 'farm-animals',
    title: 'Farm Animal Friends',
    thumbnail: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '6-18 months',
    duration: '3-4 minutes',
    pages: [
      {
        id: 'farm-1',
        image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Duck says quack quack',
        signLanguageText: 'DUCK QUACK QUACK',
        interactiveElements: [
          {
            id: 'duck-beak',
            x: 50,
            y: 45,
            width: 8,
            height: 6,
            animation: 'open-close'
          }
        ]
      },
      {
        id: 'farm-2',
        image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Dog says woof woof',
        signLanguageText: 'DOG WOOF WOOF',
        interactiveElements: [
          {
            id: 'dog-tail',
            x: 70,
            y: 60,
            width: 10,
            height: 8,
            animation: 'wag'
          }
        ]
      },
      {
        id: 'farm-3',
        image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Cat says meow meow',
        signLanguageText: 'CAT MEOW MEOW',
        interactiveElements: [
          {
            id: 'cat-whiskers',
            x: 45,
            y: 40,
            width: 12,
            height: 8,
            animation: 'twitch'
          }
        ]
      }
    ]
  },
  {
    id: 'bedtime-routine',
    title: 'Sleepy Time Story',
    thumbnail: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '6-24 months',
    duration: '3-5 minutes',
    pages: [
      {
        id: 'bedtime-1',
        image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Baby brushes teeth',
        signLanguageText: 'BRUSH TEETH',
        interactiveElements: [
          {
            id: 'toothbrush',
            x: 55,
            y: 45,
            width: 8,
            height: 12,
            animation: 'brush'
          }
        ]
      },
      {
        id: 'bedtime-2',
        image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Baby hugs teddy bear',
        signLanguageText: 'HUG TEDDY BEAR',
        interactiveElements: [
          {
            id: 'hug-teddy',
            x: 50,
            y: 50,
            width: 20,
            height: 25,
            animation: 'squeeze'
          }
        ]
      },
      {
        id: 'bedtime-3',
        image: 'https://images.pexels.com/photos/1679772/pexels-photo-1679772.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Baby goes to sleep',
        signLanguageText: 'SLEEP TIME',
        interactiveElements: [
          {
            id: 'sleepy-eyes',
            x: 45,
            y: 35,
            width: 15,
            height: 8,
            animation: 'close-slowly'
          }
        ]
      }
    ]
  },
  {
    id: 'rainbow-adventure',
    title: 'Rainbow Color Adventure',
    thumbnail: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '12-30 months',
    duration: '4-6 minutes',
    pages: [
      {
        id: 'rainbow-1',
        image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Red balloon floats up',
        signLanguageText: 'RED BALLOON UP',
        interactiveElements: [
          {
            id: 'red-balloon',
            x: 30,
            y: 60,
            width: 12,
            height: 15,
            animation: 'float-up'
          }
        ]
      },
      {
        id: 'rainbow-2',
        image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Blue bird flies by',
        signLanguageText: 'BLUE BIRD FLY',
        interactiveElements: [
          {
            id: 'blue-bird',
            x: 60,
            y: 30,
            width: 10,
            height: 8,
            animation: 'fly-across'
          }
        ]
      },
      {
        id: 'rainbow-3',
        image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Yellow sun shines bright',
        signLanguageText: 'YELLOW SUN SHINE',
        interactiveElements: [
          {
            id: 'yellow-sun',
            x: 75,
            y: 20,
            width: 18,
            height: 18,
            animation: 'glow'
          }
        ]
      },
      {
        id: 'rainbow-4',
        image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Beautiful rainbow appears',
        signLanguageText: 'RAINBOW BEAUTIFUL',
        interactiveElements: [
          {
            id: 'rainbow-arc',
            x: 50,
            y: 40,
            width: 60,
            height: 30,
            animation: 'appear-slowly'
          }
        ]
      }
    ]
  },
  {
    id: 'counting-fun',
    title: 'Counting 1-2-3',
    thumbnail: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '18-36 months',
    duration: '3-4 minutes',
    pages: [
      {
        id: 'count-1',
        image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'One ball bounces',
        signLanguageText: 'ONE BALL BOUNCE',
        interactiveElements: [
          {
            id: 'one-ball',
            x: 50,
            y: 50,
            width: 15,
            height: 15,
            animation: 'bounce'
          }
        ]
      },
      {
        id: 'count-2',
        image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Two balls roll',
        signLanguageText: 'TWO BALLS ROLL',
        interactiveElements: [
          {
            id: 'two-balls',
            x: 40,
            y: 50,
            width: 20,
            height: 15,
            animation: 'roll'
          }
        ]
      },
      {
        id: 'count-3',
        image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Three balls jump high',
        signLanguageText: 'THREE BALLS JUMP HIGH',
        interactiveElements: [
          {
            id: 'three-balls',
            x: 50,
            y: 60,
            width: 25,
            height: 15,
            animation: 'jump-high'
          }
        ]
      }
    ]
  },
  {
    id: 'family-love',
    title: 'My Loving Family',
    thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '6-24 months',
    duration: '3-5 minutes',
    pages: [
      {
        id: 'family-1',
        image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Mama gives hugs',
        signLanguageText: 'MAMA HUG',
        interactiveElements: [
          {
            id: 'mama-arms',
            x: 45,
            y: 50,
            width: 20,
            height: 15,
            animation: 'hug'
          }
        ]
      },
      {
        id: 'family-2',
        image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Papa plays peek-a-boo',
        signLanguageText: 'PAPA PEEK-A-BOO',
        interactiveElements: [
          {
            id: 'papa-hands',
            x: 50,
            y: 40,
            width: 15,
            height: 12,
            animation: 'peek-a-boo'
          }
        ]
      },
      {
        id: 'family-3',
        image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Family loves baby',
        signLanguageText: 'FAMILY LOVE BABY',
        interactiveElements: [
          {
            id: 'love-hearts',
            x: 50,
            y: 30,
            width: 30,
            height: 20,
            animation: 'float-hearts'
          }
        ]
      }
    ]
  },
  {
    id: 'weather-day',
    title: 'What\'s the Weather?',
    thumbnail: 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=400',
    ageRange: '12-30 months',
    duration: '3-4 minutes',
    pages: [
      {
        id: 'weather-1',
        image: 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Sunny day is bright',
        signLanguageText: 'SUN BRIGHT DAY',
        interactiveElements: [
          {
            id: 'bright-sun',
            x: 70,
            y: 25,
            width: 20,
            height: 20,
            animation: 'shine'
          }
        ]
      },
      {
        id: 'weather-2',
        image: 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Rain drops fall down',
        signLanguageText: 'RAIN FALL DOWN',
        interactiveElements: [
          {
            id: 'rain-drops',
            x: 50,
            y: 20,
            width: 40,
            height: 60,
            animation: 'rain-fall'
          }
        ]
      },
      {
        id: 'weather-3',
        image: 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: 'Wind blows the leaves',
        signLanguageText: 'WIND BLOW LEAVES',
        interactiveElements: [
          {
            id: 'blowing-leaves',
            x: 60,
            y: 50,
            width: 25,
            height: 20,
            animation: 'blow-away'
          }
        ]
      }
    ]
  }
];