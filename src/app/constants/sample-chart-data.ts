import { NetworkChartData } from '@components';

export const sampleFriendFormData = [
    {
        name: 'chandler',
        friends: [
            'monica', 'phoebe', 'joey'
        ],
        age: 30,
        weight: 86,
    },
    {
        name: 'joey',
        friends: [
            'ross', 'rachel',
        ],
        age: 30,
        weight: 86,
    },
];


export const sampleChartData: NetworkChartData = {
    nodes: [
      {
          name: 'chandler',
          id: 0,
      },
      {
          name: 'monica',
          id: 1,
      },
      {
          name: 'phoebe',
          id: 2,
      },
      {
          name: 'joey',
          id: 3,
      },
      {
          name: 'ross',
          id: 4,
      },
      {
          name: 'rachel',
          id: 5,
      }
    ],
    links: [
        {
            source: 0,
            target: 1
        },
        {
          source: 0,
          target: 2
      },
      {
          source: 0,
          target: 3
      },
      {
          source: 3,
          target: 4
      },
      {
          source: 3,
          target: 5
      }
    ]
};
