import { Message, Chat } from './chat.interface';
import { Listing } from './listing.interface';

export const MOCK_CHATS: Chat[] = [
  {
    id: 0,
    messages: [
      { user: 'User1', content: 'Hello' },
      { user: 'User2', content: 'Hi' },
      { user: 'User1', content: 'How are you?' },
    ],
  },
  {
    id: 1,
    messages: [
      { user: 'User1', content: 'Please give usa good grade' },
      { user: 'You', content: 'Ok! I know you worked really hard so i will!' },
    ],
  },
  {
    id: 2,
    messages: [
      { user: 'User1', content: 'I really need a vacation right now' },
      { user: 'Me', content: 'I feel you' },
      { user: 'Me', content: 'Have you ever been to Martinique?' },
      { user: 'User1', content: 'No, why?' },
      {
        user: 'Me',
        content: "I heard it's a great place to relax and have fun",
      },
    ],
  },
  {
    id: 3,
    messages: [
      { user: 'User1', content: 'I am looking for a place to stay' },
      { user: 'Renter', content: 'I have a place for you' },
      { user: 'User1', content: 'Great! Can you send me some pictures?' },
      {
        user: 'Renter',
        content:
          'This functionality is not available yet, but you can see the listing on the website!',
      },
    ],
  },
];
