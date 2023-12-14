const factions = ["Рим", "Греція", "Карфаген", "Єгипет", "Вавилон"];

const gameDate = [
  {
    season: [
      {
        title: "Осінь 2023",
        ring: [
          {
            date: "04-09-2023",
            players: [
              { player: "Радчук Д.", faction: "Греція", points: 0 },
              { player: "Моргун М.", faction: "Рим", points: 0 },
              { player: "Макаренко О.", faction: "Карфаген", points: 0 },
              { player: "Матичак Д.", faction: "Єгипет", points: 1 },
              { player: "Гарматій Р.", faction: "Вавилон", points: 0 },
            ],
            description: "Перемога здобувши 5 героїв.",
          },
          {
            date: "18-09-2023",
            players: [
              { player: "Гарматій Р.", faction: "Греція", points: 0 },
              { player: "Попівчак М.", faction: "Рим", points: 1 },
              { player: "Когут П.", faction: "Карфаген", points: 0 },
              { player: "Моргун М.", faction: "Єгипет", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "18-09-2023",
            players: [
              { player: "Моргун М.", faction: "Греція", points: 0 },
              { player: "Попівчак М.", faction: "Рим", points: 0 },
              { player: "Когут П.", faction: "Карфаген", points: 0 },
              { player: "Гарматій Р.", faction: "Єгипет", points: 1 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "26-09-2023",
            players: [
              { player: "Колісник Н.", faction: "Греція", points: 0 },
              { player: "Моргун М.", faction: "Рим", points: 0 },
              { player: "Попівчак М.", faction: "Карфаген", points: 0 },
              { player: "Матичак Д.", faction: "Єгипет", points: 0 },
              { player: "Гарматій Р.", faction: "Вавилон", points: 1 },
            ],
            description: "Перемога здобувши 5 героїв.",
          },
          {
            date: "02-10-2023",
            players: [
              { player: "Попівчак М.", faction: "Греція", points: 1 },
              { player: "Макаренко О.", faction: "Рим", points: 0 },
              { player: "Моргун М.", faction: "Карфаген", points: 0 },
              { player: "Гарматій Р.", faction: "Єгипет", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "10-10-2023",
            players: [
              { player: "Моргун М.", faction: "Греція", points: 0 },
              { player: "Радчук Д.", faction: "Рим", points: 1 },
              { player: "Сторожук О.", faction: "Карфаген", points: 0 },
              { player: "Попівчак М.", faction: "Єгипет", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "31-10-2023",
            players: [
              { player: "Моргун М.", faction: "Греція", points: 0 },
              { player: "Сторожук О.", faction: "Рим", points: 0 },
              { player: "Гарматій Р.", faction: "Єгипет", points: 1 },
              { player: "Попівчак М.", faction: "Карфаген", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "06-11-2023",
            players: [
              { player: "Матичак Д.", faction: "Греція", points: 0 },
              { player: "Колісник Н.", faction: "Рим", points: 0 },
              { player: "Макаренко О.", faction: "Карфаген", points: 1 },
              { player: "Моргун М.", faction: "Єгипет", points: 0 },
            ],
            description: "Перемога здобувши 5 героїв.",
          },
          {
            date: "13-11-2023",
            players: [
              { player: "Макаренко О.", faction: "Греція", points: 1 },
              { player: "Моргун М.", faction: "Рим", points: 0 },
              { player: "Гарматій Р.", faction: "Карфаген", points: 0 },
            ],
            description: "Перемога здобувши 5 героїв.",
          },
          {
            date: "13-11-2023",
            players: [
              { player: "Моргун М.", faction: "Греція", points: 1 },
              { player: "Макаренко О.", faction: "Рим", points: 0 },
              { player: "Гарматій Р.", faction: "Карфаген", points: 0 },
            ],
            description: "Перемога здобувши 5 героїв.",
          },
        ],
      },
    ],
  },
  {
    season: [
      {
        title: "Зима 2023-2024",
        ring: [
          {
            date: "04-12-2023",
            players: [
              { player: "Макаренко О.", faction: "Рим", points: 1 },
              { player: "Моргун М.", faction: "Греція", points: 0 },
              { player: "Гарматій Р.", faction: "Карфаген", points: 0 },
              { player: "Радчук Д.", faction: "Єгипет", points: 0 },
              { player: "Возьний О.", faction: "Вавилон", points: 0 },
            ],
            description: "Перемога побудовою піраміди.",
          },
          {
            date: "11-12-2023",
            players: [
              { player: "Сторожук О.", faction: "Рим", points: 0 },
              { player: "Моргун М.", faction: "Греція", points: 1 },
              { player: "Радчук Д.", faction: "Карфаген", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
          {
            date: "14-12-2023",
            players: [
              { player: "Радчук Д.", faction: "Рим", points: 0 },
              { player: "Моргун М.", faction: "Греція", points: 1 },
              { player: "Рега О.", faction: "Карфаген", points: 0 },
            ],
            description: "Перемога здобувши лідерство.",
          },
        ],
      },
    ],
  },
];
