import { Scenario } from './scenario.model';

export const SCENARIOS: any[] = [
  // Start
  [
    new Scenario('Which door do you choose?', 'Blue Door', 'Red Door')
  ],
  // Fork 1
  [
    new Scenario('You open the blue door and find Chinese food on top of a green rug, do you eat it?', 'Eat it', 'Don\'t eat it'),
    new Scenario('You open the red door and find Italian food on top of a yellow rug, do you eat it?', 'Eat it', 'Don\'t eat it')
  ],
  // Fork 1a
  [
    new Scenario('You eat the Chinese food, you feel a prickling sensation on your chin and suddenly a beard and antlers sprout from your head. Who do you think would win in a fight, a sushi roll or a taco?', 'Sushi\'s the way I roll', 'Taco all the way'),
    new Scenario('You don\'t eat the chinese food, all the hair on your body falls off. You die.', '', '')
  ],
  // Fork 1b
  [
    new Scenario('You eat the Italian food... you turn into a giant meatball. Who would win in a fight, a cheeseburger or a cheesecake?', 'Cheeseburger bustin\' bellies', 'Cheesecake on a lake'),
    new Scenario('You don\'t eat the Italian food... you turn into a puppy and you pee on a meatball. The meatball kills you.', '', '')
  ]
];
