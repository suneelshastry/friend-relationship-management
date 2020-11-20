import { NetworkChartData } from '@components';
import { Person } from '@models';

export const sampleFriendFormData: Person[] = [
  {
    name: 'Charlie Harper',
    friends: ['Mia', 'Lydia'],
    age: 38,
    weight: 75,
  },
  {
    name: 'Alan Harper',
    friends: ['Charlie Harper', 'Judith'],
    age: 34,
    weight: 70,
  },
];

export const sampleChartData: NetworkChartData = {
  nodes: [
    {
      name: 'Charlie Harper',
      id: 0,
    },
    {
      name: 'Mia',
      id: 1,
    },
    {
      name: 'Lydia',
      id: 2,
    },
    {
      name: 'Alan Harper',
      id: 3,
    },
    {
      name: 'Judith',
      id: 4,
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
    },
    {
      source: 0,
      target: 2,
    },
    {
      source: 3,
      target: 0,
    },
    {
      source: 3,
      target: 4,
    },
  ],
};
