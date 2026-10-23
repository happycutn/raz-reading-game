// RAZ 阅读大冒险 · Level C 原创内容包
// 原创分级题库，难度对标 RAZ Level C（高频词、一句一行、重复句型）
window.RAZ_LEVEL_C = {
  level: "C",
  ready: true,
  wordQuestions: [
    { emoji: "🐱", correct: "cat", options: ["cat", "cap", "car", "can"] },
    { emoji: "🐶", correct: "dog", options: ["dog", "dig", "dot", "duck"] },
    { emoji: "☀️", correct: "sun", options: ["sun", "son", "sunset", "sand"] },
    { emoji: "⚽", correct: "ball", options: ["ball", "bell", "bowl", "bee"] },
    { emoji: "🍎", correct: "apple", options: ["apple", "banana", "orange", "grape"] },
    { emoji: "🐦", correct: "bird", options: ["bird", "bear", "bee", "bat"] },
    { emoji: "🐟", correct: "fish", options: ["fish", "frog", "fox", "farm"] },
    { emoji: "🚗", correct: "car", options: ["car", "cat", "bus", "cart"] },
    { emoji: "👒", correct: "hat", options: ["hat", "hot", "hand", "hen"] },
    { emoji: "🌳", correct: "tree", options: ["tree", "three", "train", "trip"] },
    { emoji: "🥛", correct: "milk", options: ["milk", "water", "juice", "soup"] },
    { emoji: "🦆", correct: "duck", options: ["duck", "dog", "deer", "dove"] },
    { emoji: "🐸", correct: "frog", options: ["frog", "fish", "fox", "fly"] },
    { emoji: "📖", correct: "book", options: ["book", "boot", "bag", "box"] },
    { emoji: "🛏️", correct: "bed", options: ["bed", "bat", "bus", "big"] },
    { emoji: "⭐", correct: "star", options: ["star", "store", "storm", "start"] },
    { emoji: "🚌", correct: "bus", options: ["bus", "car", "boat", "bike"] },
    { emoji: "🍌", correct: "banana", options: ["banana", "apple", "bread", "cake"] },
    { emoji: "🐷", correct: "pig", options: ["pig", "pin", "pony", "pan"] },
    { emoji: "🌹", correct: "flower", options: ["flower", "tree", "grass", "leaf"] }
  ],
  sentenceQuestions: [
    { type: "fill", text: "I see a ___. It says meow.", options: ["cat", "cow", "hen"], correct: "cat" },
    { type: "fill", text: "The ___ is hot. It is up in the sky.", options: ["sun", "moon", "star"], correct: "sun" },
    { type: "fill", text: "I like to drink ___. It is white.", options: ["milk", "juice", "water"], correct: "milk" },
    { type: "fill", text: "The fish can ___ in the water.", options: ["swim", "run", "fly"], correct: "swim" },
    { type: "fill", text: "I read a ___ at school.", options: ["book", "ball", "cake"], correct: "book" },
    { type: "fill", text: "The bird can ___. It goes up high.", options: ["fly", "cry", "sit"], correct: "fly" },
    { type: "match", text: "I have a red ball. I can bounce it.", correctEmoji: "⚽", options: ["⚽", "🍎", "📕"] },
    { type: "match", text: "The duck is in the water. Quack! Quack!", correctEmoji: "🦆", options: ["🦆", "🐸", "🐟"] },
    { type: "match", text: "The pig is big. It is in the mud.", correctEmoji: "🐷", options: ["🐷", "🐄", "🐑"] },
    { type: "match", text: "The star shines up in the night sky.", correctEmoji: "⭐", options: ["⭐", "☀️", "🌈"] },
    { type: "match", text: "I sleep in my bed at night.", correctEmoji: "🛏️", options: ["🛏️", "🚗", "🌳"] },
    { type: "match", text: "The flower is pretty. Bees like it.", correctEmoji: "🌹", options: ["🌹", "🍌", "🚌"] }
  ],
  passages: [
    {
      title: "The Big Red Ball",
      source: "Original Story · Level C",
      emojiHint: "⚽🔴",
      lines: [
        { text: "I see a ball.", emoji: "⚽" },
        { text: "The ball is big.", emoji: "🔴" },
        { text: "The ball is red.", emoji: "❤️" },
        { text: "I can bounce the ball.", emoji: "🏀" },
        { text: "I can kick the ball.", emoji: "🦶" },
        { text: "The ball goes up, up, up!", emoji: "⬆️" },
        { text: "I love my big red ball.", emoji: "😊" }
      ],
      questions: [
        { q: "What color is the ball?", options: ["Red", "Blue", "Green"], correct: "Red", type: "细节" },
        { q: "What can I do with the ball?", options: ["Bounce it", "Eat it", "Wear it"], correct: "Bounce it", type: "细节" },
        { q: "Where does the ball go?", options: ["Up, up, up", "Under the bed", "Into the box"], correct: "Up, up, up", type: "细节" },
        { q: "How does the boy feel about his ball?", options: ["He loves it", "He is afraid of it", "He wants a new one"], correct: "He loves it", type: "推理" },
        { q: "What is this story mostly about?", options: ["A boy and his big red ball", "Colors we can see", "Games at school"], correct: "A boy and his big red ball", type: "主旨" }
      ]
    },
    {
      title: "My Little Cat",
      source: "Original Story · Level C",
      emojiHint: "🐱",
      lines: [
        { text: "My cat is little.", emoji: "🐱" },
        { text: "She is gray.", emoji: "🩶" },
        { text: "She likes to sit with me.", emoji: "🪑" },
        { text: "She likes milk.", emoji: "🥛" },
        { text: "She sleeps in my bed.", emoji: "🛏️" },
        { text: "She says meow, meow.", emoji: "🗣️" },
        { text: "I love my little cat.", emoji: "❤️" }
      ],
      questions: [
        { q: "What color is the cat?", options: ["Gray", "White", "Black"], correct: "Gray", type: "细节" },
        { q: "What does the cat like to drink?", options: ["Milk", "Juice", "Water"], correct: "Milk", type: "细节" },
        { q: "Where does the cat sleep?", options: ["In my bed", "In a box", "In a tree"], correct: "In my bed", type: "细节" },
        { q: "Why does the cat sit with the boy?", options: ["She likes to be with him", "She wants to go out", "She is hungry"], correct: "She likes to be with him", type: "推理" },
        { q: "What is this story mostly about?", options: ["A boy and his little cat", "Animals in the zoo", "How cats play"], correct: "A boy and his little cat", type: "主旨" }
      ]
    },
    {
      title: "At the Zoo",
      source: "Original Story · Level C",
      emojiHint: "🦁🐘🐒",
      lines: [
        { text: "We go to the zoo.", emoji: "🚶" },
        { text: "I see a big bear.", emoji: "🐻" },
        { text: "I see a tall giraffe.", emoji: "🦒" },
        { text: "I see a funny monkey.", emoji: "🐒" },
        { text: "The monkey eats a banana.", emoji: "🍌" },
        { text: "The bear sleeps.", emoji: "😴" },
        { text: "What a fun day!", emoji: "🎉" }
      ],
      questions: [
        { q: "What does the monkey eat?", options: ["A banana", "An apple", "A fish"], correct: "A banana", type: "细节" },
        { q: "What does the bear do?", options: ["He sleeps", "He runs", "He sings"], correct: "He sleeps", type: "细节" },
        { q: "Which animal is tall?", options: ["The giraffe", "The bear", "The monkey"], correct: "The giraffe", type: "细节" },
        { q: "Where are the children?", options: ["At the zoo", "At school", "At home"], correct: "At the zoo", type: "推理" },
        { q: "What is this story mostly about?", options: ["Animals we see at the zoo", "A monkey's birthday", "The bear's nap"], correct: "Animals we see at the zoo", type: "主旨" }
      ]
    }
  ]
};
