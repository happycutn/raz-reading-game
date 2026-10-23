// RAZ 阅读大冒险 · Level D 原创内容包
// 原创分级题库，难度对标 RAZ Level D（简单句、少量新词、动作与自然主题）
window.RAZ_LEVEL_D = {
  level: "D",
  ready: true,
  wordQuestions: [
    { emoji: "🐻", correct: "bear", options: ["bear", "beard", "bird", "bee"] },
    { emoji: "🐄", correct: "cow", options: ["cow", "crow", "cat", "owl"] },
    { emoji: "🐑", correct: "sheep", options: ["sheep", "ship", "shop", "shoe"] },
    { emoji: "🐔", correct: "hen", options: ["hen", "hand", "hog", "horse"] },
    { emoji: "🐰", correct: "rabbit", options: ["rabbit", "rat", "ribbon", "robot"] },
    { emoji: "🌙", correct: "moon", options: ["moon", "mop", "milk", "mouth"] },
    { emoji: "🎂", correct: "cake", options: ["cake", "candy", "cook", "candle"] },
    { emoji: "🏠", correct: "house", options: ["house", "horse", "home", "hole"] },
    { emoji: "🌧️", correct: "rain", options: ["rain", "wind", "snow", "sun"] },
    { emoji: "❄️", correct: "snow", options: ["snow", "slow", "show", "star"] },
    { emoji: "🏊", correct: "swim", options: ["swim", "sing", "sit", "skip"] },
    { emoji: "🏃", correct: "run", options: ["run", "ride", "read", "row"] },
    { emoji: "🤸", correct: "jump", options: ["jump", "jam", "jog", "jet"] },
    { emoji: "🥵", correct: "hot", options: ["hot", "hat", "hit", "hop"] },
    { emoji: "🧊", correct: "cold", options: ["cold", "cool", "coat", "corn"] },
    { emoji: "🚜", correct: "tractor", options: ["tractor", "trailer", "train", "truck"] },
    { emoji: "🥕", correct: "carrot", options: ["carrot", "candy", "corn", "cake"] },
    { emoji: "🌽", correct: "corn", options: ["corn", "carrot", "cake", "coin"] },
    { emoji: "🥚", correct: "egg", options: ["egg", "leg", "bag", "pig"] },
    { emoji: "🦋", correct: "butterfly", options: ["butterfly", "bird", "bee", "beetle"] }
  ],
  sentenceQuestions: [
    { type: "fill", text: "The bear sleeps all ___. He wakes up in spring.", options: ["winter", "summer", "morning"], correct: "winter" },
    { type: "fill", text: "We get eggs from the ___.", options: ["hen", "cow", "pig"], correct: "hen" },
    { type: "fill", text: "The rabbit likes to eat ___.", options: ["carrots", "cookies", "fish"], correct: "carrots" },
    { type: "fill", text: "It is cold. Let's make a ___!", options: ["snowman", "sandcastle", "pizza"], correct: "snowman" },
    { type: "fill", text: "The cow gives us ___.", options: ["milk", "eggs", "wool"], correct: "milk" },
    { type: "fill", text: "The moon comes out at ___.", options: ["night", "noon", "breakfast"], correct: "night" },
    { type: "match", text: "The rain falls down. We need an umbrella.", correctEmoji: "🌧️", options: ["🌧️", "☀️", "❄️"] },
    { type: "match", text: "The sheep has soft wool. The farmer cuts it.", correctEmoji: "🐑", options: ["🐑", "🐄", "🐔"] },
    { type: "match", text: "The frog jumps into the pond. Splash!", correctEmoji: "🐸💦", options: ["🐸💦", "🐟💦", "🦆💦"] },
    { type: "match", text: "The cake is ready. Let's eat it at the party.", correctEmoji: "🎂", options: ["🎂", "🥕", "🌽"] },
    { type: "match", text: "The butterfly comes out of its cocoon. It can fly!", correctEmoji: "🦋", options: ["🦋", "🐛", "🐝"] },
    { type: "match", text: "The tractor works on the farm all day.", correctEmoji: "🚜", options: ["🚜", "🚗", "🚲"] }
  ],
  passages: [
    {
      title: "The Sleepy Bear",
      source: "Original Story · Level D",
      emojiHint: "🐻❄️",
      lines: [
        { text: "The bear lives in the woods.", emoji: "🌲" },
        { text: "Winter is coming. It is cold.", emoji: "❄️" },
        { text: "The bear eats and eats.", emoji: "🍯" },
        { text: "Then he goes into his den.", emoji: "🕳️" },
        { text: "He sleeps all winter.", emoji: "😴" },
        { text: "In spring, he wakes up.", emoji: "🌷" },
        { text: "He is very hungry!", emoji: "😋" }
      ],
      questions: [
        { q: "Where does the bear live?", options: ["In the woods", "On a farm", "In a house"], correct: "In the woods", type: "细节" },
        { q: "What does the bear do before he sleeps?", options: ["He eats and eats", "He swims", "He sings"], correct: "He eats and eats", type: "细节" },
        { q: "When does the bear wake up?", options: ["In spring", "In fall", "At night"], correct: "In spring", type: "细节" },
        { q: "Why is the bear hungry in spring?", options: ["He slept all winter", "He lost his food", "He ran far away"], correct: "He slept all winter", type: "推理" },
        { q: "What is this story mostly about?", options: ["A bear's long winter sleep", "Animals that like snow", "Food in the woods"], correct: "A bear's long winter sleep", type: "主旨" }
      ]
    },
    {
      title: "A Day on the Farm",
      source: "Original Story · Level D",
      emojiHint: "🚜🐄🐔",
      lines: [
        { text: "We visit a farm.", emoji: "🚜" },
        { text: "The hen gives us eggs.", emoji: "🥚" },
        { text: "The cow gives us milk.", emoji: "🥛" },
        { text: "The sheep has soft wool.", emoji: "🐑" },
        { text: "The horse runs fast.", emoji: "🐎" },
        { text: "I feed the rabbits.", emoji: "🥕" },
        { text: "Farm animals are my friends.", emoji: "😊" }
      ],
      questions: [
        { q: "Who gives us eggs?", options: ["The hen", "The cow", "The sheep"], correct: "The hen", type: "细节" },
        { q: "What does the sheep have?", options: ["Soft wool", "Long ears", "Big feet"], correct: "Soft wool", type: "细节" },
        { q: "What does the boy feed the rabbits?", options: ["Carrots", "Eggs", "Milk"], correct: "Carrots", type: "细节" },
        { q: "How does the boy feel about farm animals?", options: ["They are his friends", "They are scary", "They are too loud"], correct: "They are his friends", type: "推理" },
        { q: "What is this story mostly about?", options: ["A visit to the farm", "How to ride a horse", "The cow's milk"], correct: "A visit to the farm", type: "主旨" }
      ]
    },
    {
      title: "Rainy Day Fun",
      source: "Original Story · Level D",
      emojiHint: "🌧️🌈",
      lines: [
        { text: "It is raining. We can't go out to play.", emoji: "🌧️" },
        { text: "We build with blocks.", emoji: "🧱" },
        { text: "We read books.", emoji: "📖" },
        { text: "We bake cookies with Mom.", emoji: "🍪" },
        { text: "Then the rain stops.", emoji: "☁️" },
        { text: "Look! A rainbow!", emoji: "🌈" },
        { text: "Rainy days can be fun, too.", emoji: "😄" }
      ],
      questions: [
        { q: "What is the weather like at first?", options: ["Rainy", "Sunny", "Snowy"], correct: "Rainy", type: "细节" },
        { q: "What do they bake with Mom?", options: ["Cookies", "Cake", "Pizza"], correct: "Cookies", type: "细节" },
        { q: "What appears after the rain stops?", options: ["A rainbow", "A bird", "The moon"], correct: "A rainbow", type: "细节" },
        { q: "Why can't they go out to play?", options: ["Because it is raining", "Because it is too hot", "Because they are tired"], correct: "Because it is raining", type: "推理" },
        { q: "What is this story mostly about?", options: ["Fun things to do on a rainy day", "How rain falls", "Baking cookies"], correct: "Fun things to do on a rainy day", type: "主旨" }
      ]
    }
  ]
};
