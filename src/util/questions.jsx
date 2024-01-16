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
      "None of the above (Correct)",
    ],
    correctAnswer: "None of the above",
    reasoning:
      "Arrange the matches to form two small squares, then place the third match to connect the corners of the smaller squares, creating a larger third square.",
  },
  {
    question:
      "What comes once in a minute, twice in a moment, but never in a thousand years?",
    options: [
      "The letter 'M' (Correct)",
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
      "All the people were married (Correct)",
      "It's a ghost boat",
    ],
    correctAnswer: "All the people were married",
    reasoning:
      "The question is a play on words. The people on the boat are not 'single' because they are married.",
  },
  {
    question: "If you drop a yellow hat in the Red Sea, what does it become?",
    options: ["Wet", "Wet (Correct)", "Discolored", "A fashion statement"],
    correctAnswer: "Wet",
    reasoning:
      "The Red Sea is a body of water, so anything dropped into it would become wet.",
  },
  {
    question: "What has keys but can't open locks?",
    options: ["Piano", "Keyboard", "Computer", "A typewriter (Correct)"],
    correctAnswer: "A typewriter",
    reasoning: "A typewriter has keys, but it can't open locks.",
  },
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    options: ["Whistle", "Echo", "Music", "An echo (Correct)"],
    correctAnswer: "An echo",
    reasoning:
      "An echo 'speaks' without a mouth, 'hears' without ears, and is created by sound carried by the wind.",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "Breath", "Time", "Footsteps (Correct)"],
    correctAnswer: "Footsteps",
    reasoning:
      "The more footsteps you take, the more footprints you leave behind.",
  },
  {
    question:
      "What comes once in a year, twice in a month, but never in a week?",
    options: [
      "The letter 'E'",
      "A birthday",
      "A calendar (Correct)",
      "A holiday",
    ],
    correctAnswer: "A calendar",
    reasoning:
      "The word 'calendar' contains the letter 'A' once in a year, twice in a month, but not at all in a week.",
  },
  {
    question:
      "I have cities but no houses, mountains but no trees, and water but no fish. What am I?",
    options: ["A map (Correct)", "A country", "A globe", "A river"],
    correctAnswer: "A map",
    reasoning:
      "A map depicts cities, mountains, and bodies of water but doesn't contain actual houses, trees, or fish.",
  },
  {
    question:
      "The person who makes it, sells it. The person who buys it never uses it. What is it?",
    options: ["Candle (Correct)", "Paper", "Pen", "Art"],
    correctAnswer: "Candle",
    reasoning:
      "A candle is made and sold, but the buyer typically doesn't use it in the sense of consuming it.",
  },
  {
    question: "What has a heart that doesn't beat?",
    options: [
      "A broken clock",
      "An artichoke",
      "An egg",
      "An artichoke (Correct)",
    ],
    correctAnswer: "An artichoke",
    reasoning:
      "An artichoke has a heart, which is the innermost, edible part, but it doesn't beat like a human heart.",
  },
  {
    question:
      "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    options: ["Gold", "Diamond", "Pencil lead", "Graphite (Correct)"],
    correctAnswer: "Graphite",
    reasoning:
      "Graphite is mined, enclosed in a wooden case (pencil), and used by many people for writing.",
  },
  {
    question: "What has keys but can't open locks?",
    options: [
      "Accordion",
      "Typewriter",
      "Computer keyboard",
      "Piano (Correct)",
    ],
    correctAnswer: "Piano",
    reasoning:
      "A piano has keys, but they don't open locks; instead, they produce musical notes.",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "A photograph", "Memories", "A shower (Correct)"],
    correctAnswer: "A shower",
    reasoning:
      "The more you take a shower, the more water droplets you leave behind.",
  },
];

export default QUESTIONS;
