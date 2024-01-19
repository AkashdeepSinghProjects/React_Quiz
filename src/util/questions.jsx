const QUESTIONS = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris",
    reasoning: "Paris is the capital of France.",
  },
  {
    question:
      "If a plane crashes on the border of the United States and Canada, where should the survivors be buried?",
    options: ["Nowhere", "United States", "Canada", "Depends on nationality"],
    correctAnswer: "Depends on nationality",
    reasoning: "Survivors should be buried according to their nationality.",
  },
  {
    question: "What is the next number in the sequence: 2, 6, 12, 20, __?",
    options: ["30", "24", "26", "32"],
    correctAnswer: "32",
    reasoning: "The sequence represents successive squares of natural numbers.",
  },
  {
    question: "Which figure is the odd one out?",
    options: ["Square", "Circle", "Triangle", "Pentagon"],
    correctAnswer: "Pentagon",
    reasoning: "All other shapes are polygons with equal sides.",
  },
  {
    question: "Identify the next shape in the series: ▲, ◆, ■, __?",
    options: ["★", "○", "□", "●"],
    correctAnswer: "□",
    reasoning:
      "The series alternates between a triangle, a diamond, and a square.",
  },
  {
    question: "Hand is to Glove as Foot is to __?",
    options: ["Sock", "Shoe", "Sandal", "Slipper"],
    correctAnswer: "Shoe",
    reasoning: "A glove is worn on the hand, and a shoe is worn on the foot.",
  },
  {
    question: "Which word does not belong with the others?",
    options: ["Elephant", "Lion", "Tiger", "Snake"],
    correctAnswer: "Snake",
    reasoning: "All others are mammals; a snake is a reptile.",
  },
  {
    question:
      "If all roses are flowers and some flowers fade quickly, can it be logically concluded that some roses fade quickly?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
    reasoning:
      "If all roses are flowers, and some flowers fade quickly, then some roses must fade quickly.",
  },
  {
    question: "Complete the series: 1, 4, 9, 16, __?",
    options: ["20", "25", "30", "18"],
    correctAnswer: "25",
    reasoning: "The series represents successive squares of natural numbers.",
  },
  {
    question:
      "Which of the following shapes can be created by folding the unfolded shape below?",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    correctAnswer: "Square",
    reasoning: "Folding the unfolded shape creates a symmetrical square.",
  },
  {
    question:
      "How can you arrange three matches to form exactly three squares?",
    options: [
      "Triangle formation",
      "L-shape",
      "Stacked vertically",
      "None of the above",
    ],
    correctAnswer: "None of the above",
    reasoning:
      "Arrange the matches to form two small squares, then place the third match to connect the corners of the smaller squares, creating a larger third square.",
  },
  {
    question:
      "What comes once in a minute, twice in a moment, but never in a thousand years?",
    options: [
      "The letter 'M'",
      "The number '1'",
      "The word 'Time'",
      "The letter 'A'",
    ],
    correctAnswer: "The letter 'M'",
    reasoning:
      "The letter 'M' appears once in the word 'minute,' twice in the word 'moment,' but not in the phrase 'a thousand years.'",
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again, you don’t see a single person on the boat. Why?",
    options: [
      "Invisibility cloak",
      "Everyone jumped overboard",
      "All the people were married",
      "It's a ghost boat",
    ],
    correctAnswer: "All the people were married",
    reasoning:
      "The question is a play on words. The people on the boat are not 'single' because they are married.",
  },
  {
    question: "If you drop a yellow hat in the Red Sea, what does it become?",
    options: ["Wet", "Wet", "Discolored", "A fashion statement"],
    correctAnswer: "Wet",
    reasoning:
      "The Red Sea is a body of water, so anything dropped into it would become wet.",
  },
  {
    question: "What has keys but can't open locks?",
    options: ["Piano", "Keyboard", "Computer", "A typewriter"],
    correctAnswer: "A typewriter",
    reasoning: "A typewriter has keys, but it can't open locks.",
  },
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    options: ["Whistle", "Echo", "Music", "An echo"],
    correctAnswer: "An echo",
    reasoning:
      "An echo 'speaks' without a mouth, 'hears' without ears, and is created by sound carried by the wind.",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "Breath", "Time", "Footsteps"],
    correctAnswer: "Footsteps",
    reasoning:
      "The more footsteps you take, the more footprints you leave behind.",
  },
  {
    question:
      "What comes once in a year, twice in a month, but never in a week?",
    options: ["The letter 'E'", "A birthday", "A calendar", "A holiday"],
    correctAnswer: "A calendar",
    reasoning:
      "The word 'calendar' contains the letter 'A' once in a year, twice in a month, but not at all in a week.",
  },
  {
    question:
      "I have cities but no houses, mountains but no trees, and water but no fish. What am I?",
    options: ["A map", "A country", "A globe", "A river"],
    correctAnswer: "A map",
    reasoning:
      "A map depicts cities, mountains, and bodies of water but doesn't contain actual houses, trees, or fish.",
  },
  {
    question:
      "The person who makes it, sells it. The person who buys it never uses it. What is it?",
    options: ["Candle", "Paper", "Pen", "Art"],
    correctAnswer: "Candle",
    reasoning:
      "A candle is made and sold, but the buyer typically doesn't use it in the sense of consuming it.",
  },
  {
    question: "What has a heart that doesn't beat?",
    options: ["A broken clock", "An artichoke", "An egg", "An artichoke"],
    correctAnswer: "An artichoke",
    reasoning:
      "An artichoke has a heart, which is the innermost, edible part, but it doesn't beat like a human heart.",
  },
  {
    question:
      "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    options: ["Gold", "Diamond", "Pencil lead", "Graphite"],
    correctAnswer: "Graphite",
    reasoning:
      "Graphite is mined, enclosed in a wooden case (pencil), and used by many people for writing.",
  },
  {
    question: "What has keys but can't open locks?",
    options: ["Accordion", "Typewriter", "Computer keyboard", "Piano"],
    correctAnswer: "Piano",
    reasoning:
      "A piano has keys, but they don't open locks; instead, they produce musical notes.",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "A photograph", "Memories", "A shower"],
    correctAnswer: "A shower",
    reasoning:
      "The more you take a shower, the more water droplets you leave behind.",
  },
  {
    question:
      "How can you arrange three matches to form exactly three squares?",
    options: [
      "Triangle formation",
      "L-shape",
      "Stacked vertically",
      "None of the above",
    ],
    correctAnswer: "None of the above",
    reasoning:
      "Arrange the matches to form two small squares, then place the third match to connect the corners of the smaller squares, creating a larger third square.",
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswer: "180 degrees",
    reasoning:
      "The sum of the angles in any triangle is always equal to 180 degrees.",
  },
  {
    question:
      "In a standard deck of playing cards, which suit is represented by a red heart symbol?",
    options: ["Spades", "Diamonds", "Clubs", "Hearts"],
    correctAnswer: "Hearts",
    reasoning:
      "The red heart symbol in a standard deck of playing cards represents the Hearts suit.",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: "Seven",
    reasoning:
      "There are seven continents on Earth: Africa, Antarctica, Asia, Europe, North America, Australia, and South America.",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
    reasoning:
      "Jupiter is the largest planet in our solar system, with a diameter of about 86,881 miles (139,822 kilometers).",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Iron", "Silver"],
    correctAnswer: "Oxygen",
    reasoning:
      "The chemical symbol 'O' represents the element oxygen on the periodic table.",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Emily Brontë",
    ],
    correctAnswer: "William Shakespeare",
    reasoning:
      "'Romeo and Juliet' was written by William Shakespeare, one of the most famous playwrights and poets in history.",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
    reasoning:
      "Tokyo is the capital city of Japan, known for its modern technology, cultural attractions, and vibrant atmosphere.",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    correctAnswer: "Mars",
    reasoning:
      "Mars is often referred to as the 'Red Planet' due to its reddish appearance caused by iron oxide (rust) on its surface.",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    reasoning: "The Pacific Ocean is the largest ocean on Earth.",
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
    reasoning: "The 'Mona Lisa' was painted by Leonardo da Vinci.",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Gold", "Iodine"],
    correctAnswer: "Oxygen",
    reasoning:
      "Oxygen is represented by the chemical symbol 'O' on the periodic table.",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1923", "1931"],
    correctAnswer: "1912",
    reasoning: "The Titanic sank in the year 1912 after hitting an iceberg.",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
    reasoning: "Canberra is the capital city of Australia.",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Yen", "Ringgit", "Baht"],
    correctAnswer: "Yen",
    reasoning: "The currency of Japan is the Yen.",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "J.K. Rowling",
      "Harper Lee",
      "George Orwell",
      "Ernest Hemingway",
    ],
    correctAnswer: "Harper Lee",
    reasoning: "'To Kill a Mockingbird' was written by Harper Lee.",
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Venus",
    reasoning:
      "Venus is often referred to as the 'Morning Star' when visible before sunrise and the 'Evening Star' when visible after sunset.",
  },
  {
    question: "What is the capital of South Africa?",
    options: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
    correctAnswer: "Pretoria",
    reasoning:
      "Pretoria is one of the three capital cities of South Africa, serving as the administrative capital.",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Christopher Marlowe",
      "William Shakespeare",
      "Oscar Wilde",
      "Jane Austen",
    ],
    correctAnswer: "William Shakespeare",
    reasoning:
      "'Romeo and Juliet' is a tragedy play written by William Shakespeare.",
  },
  {
    question: "Which gas is responsible for the Earth's greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Methane", "Nitrogen"],
    correctAnswer: "Carbon Dioxide",
    reasoning:
      "Carbon Dioxide is a major greenhouse gas responsible for trapping heat in the Earth's atmosphere.",
  },
  {
    question: "Who painted the famous 'Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Leonardo da Vinci",
    ],
    correctAnswer: "Vincent van Gogh",
    reasoning: "'Starry Night' is a masterpiece painted by Vincent van Gogh.",
  },
  {
    question: "What is the largest mammal on land?",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
    correctAnswer: "Elephant",
    reasoning:
      "The Elephant is the largest mammal on land, known for its large size and distinctive trunk.",
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1985", "1989", "1991", "1995"],
    correctAnswer: "1989",
    reasoning:
      "The Berlin Wall fell in 1989, leading to the reunification of East and West Germany.",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
    reasoning: "Ottawa is the capital city of Canada.",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
    reasoning:
      "Jupiter is the largest planet in our solar system, known for its massive size and powerful magnetic field.",
  },
  {
    question: "Who wrote the famous play 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    reasoning: "'Hamlet' is a tragedy play written by William Shakespeare.",
  },
  {
    question: "Which element is essential for all known forms of life?",
    options: ["Gold", "Carbon", "Silver", "Platinum"],
    correctAnswer: "Carbon",
    reasoning:
      "Carbon is a fundamental building block for organic molecules and is essential for life as we know it.",
  },
  {
    question: "In which year did the United States declare its independence?",
    options: ["1774", "1781", "1776", "1790"],
    correctAnswer: "1776",
    reasoning: "The United States declared its independence on July 4, 1776.",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
    reasoning: "Brasília is the capital city of Brazil.",
  },
];

export default QUESTIONS;
