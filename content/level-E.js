// RAZ 阅读大冒险 · Level E 原创内容包
// 原创分级题库，难度对标 RAZ Level E（6-10 词句、时间线叙事）
window.RAZ_LEVEL_E = {
  level: "E",
  ready: true,
  wordQuestions: [
    { emoji: "🍋", correct: "lemon", options: ["lemon", "melon", "lemonade", "lime"] },
    { emoji: "⛈️", correct: "storm", options: ["storm", "store", "story", "star"] },
    { emoji: "🦕", correct: "dinosaur", options: ["dinosaur", "dragon", "dolphin", "donkey"] },
    { emoji: "🍿", correct: "popcorn", options: ["popcorn", "pizza", "pancake", "pasta"] },
    { emoji: "🏖️", correct: "beach", options: ["beach", "bench", "bridge", "branch"] },
    { emoji: "🦛", correct: "hippo", options: ["hippo", "horse", "hamster", "hawk"] },
    { emoji: "🍕", correct: "pizza", options: ["pizza", "pasta", "peach", "pear"] },
    { emoji: "👩‍⚕️", correct: "vet", options: ["vet", "van", "vest", "violin"] },
    { emoji: "🎣", correct: "fishing", options: ["fishing", "swimming", "hiking", "painting"] },
    { emoji: "🐘", correct: "elephant", options: ["elephant", "giraffe", "zebra", "rhino"] },
    { emoji: "🦁", correct: "lion", options: ["lion", "tiger", "bear", "wolf"] },
    { emoji: "🎠", correct: "merry-go-round", options: ["merry-go-round", "ferris wheel", "roller coaster", "swing"] },
    { emoji: "🍦", correct: "ice cream", options: ["ice cream", "juice", "jelly", "cake"] },
    { emoji: "🪁", correct: "kite", options: ["kite", "kit", "ball", "bike"] },
    { emoji: "🚒", correct: "fire truck", options: ["fire truck", "police car", "bus", "taxi"] },
    { emoji: "🎸", correct: "guitar", options: ["guitar", "piano", "drum", "flute"] },
    { emoji: "🦜", correct: "parrot", options: ["parrot", "penguin", "pigeon", "parrot fish"] },
    { emoji: "🏰", correct: "castle", options: ["castle", "church", "cave", "camp"] },
    { emoji: "🐙", correct: "octopus", options: ["octopus", "shark", "whale", "crab"] },
    { emoji: "💧", correct: "puddle", options: ["puddle", "paddle", "pool", "pond"] }
  ],
  sentenceQuestions: [
    { type: "fill", text: "On Saturday we went to the ___. We saw many animals.", options: ["zoo", "park", "store"], correct: "zoo" },
    { type: "fill", text: "I flew my ___ at the beach. The wind was strong.", options: ["kite", "ball", "hat"], correct: "kite" },
    { type: "fill", text: "Mom made ___ for dinner. It is my favorite food.", options: ["pizza", "soup", "salad"], correct: "pizza" },
    { type: "fill", text: "My dog is sick, so we took him to the ___.", options: ["vet", "farm", "school"], correct: "vet" },
    { type: "fill", text: "At the movies we ate ___. It was salty.", options: ["popcorn", "cookies", "eggs"], correct: "popcorn" },
    { type: "fill", text: "In summer we swim at the ___.", options: ["beach", "desert", "kitchen"], correct: "beach" },
    { type: "match", text: "Dark clouds fill the sky. Thunder booms!", correctEmoji: "⛈️", options: ["⛈️", "🌈", "☀️"], label: "打雷下雨" },
    { type: "match", text: "I jumped in the puddle after the rain.", correctEmoji: "💧", options: ["💧", "❄️", "🔥"], label: "踩水坑" },
    { type: "match", text: "The octopus has eight long arms.", correctEmoji: "🐙", options: ["🐙", "🐟", "🦈"], label: "八条腿的动物" },
    { type: "match", text: "The fire truck rushes by. The siren is loud!", correctEmoji: "🚒", options: ["🚒", "🚑", "🚓"], label: "消防车" },
    { type: "match", text: "We rode the merry-go-round at the fair.", correctEmoji: "🎠", options: ["🎠", "🎡", "⛲"], label: "旋转木马" },
    { type: "match", text: "The parrot can say hello. It talks!", correctEmoji: "🦜", options: ["🦜", "🐦", "🦉"], label: "会说话的鸟" }
  ],
  passages: [
    {
      title: "A Trip to the Beach",
      source: "原创小故事 · 难度对标 RAZ Level E",
      emojiHint: "🏖️🏰🍋",
      lines: [
        { text: "Last Sunday, my family went to the beach.", emoji: "🚗" },
        { text: "First, we put on sunscreen.", emoji: "🧴" },
        { text: "Then Dad and I built a big sand castle.", emoji: "🏰" },
        { text: "A big wave came and washed it away!", emoji: "🌊" },
        { text: "We laughed and built it again.", emoji: "😄" },
        { text: "Mom gave us cold lemonade.", emoji: "🍋" },
        { text: "Before we left, we picked up our trash.", emoji: "🗑️" },
        { text: "I can't wait to go back.", emoji: "❤️" }
      ],
      questions: [
        { q: "Who built the sand castle?", options: ["Dad and I", "Mom and I", "My friends and I"], correct: "Dad and I", type: "细节" },
        { q: "What did the big wave do?", options: ["Washed the castle away", "Brought us shells", "Pushed our boat"], correct: "Washed the castle away", type: "细节" },
        { q: "What did Mom give the children?", options: ["Cold lemonade", "Ice cream", "Warm milk"], correct: "Cold lemonade", type: "细节" },
        { q: "Why did they build the castle again?", options: ["The wave washed it away", "It was too small", "Dad broke it"], correct: "The wave washed it away", type: "推理" },
        { q: "What is this story mostly about?", options: ["A fun family day at the beach", "How waves move", "Making lemonade"], correct: "A fun family day at the beach", type: "主旨" }
      ]
    },
    {
      title: "The School Birthday Surprise",
      source: "原创小故事 · 难度对标 RAZ Level E",
      emojiHint: "🎂🏫🎨",
      lines: [
        { text: "It was my birthday.", emoji: "🎂" },
        { text: "I brought cupcakes to school.", emoji: "🧁" },
        { text: "My teacher put a candle in one.", emoji: "🕯️" },
        { text: "Everyone sang for me.", emoji: "🎵" },
        { text: "I made a wish and blew out the candle.", emoji: "💨" },
        { text: "My best friend gave me a drawing.", emoji: "🎨" },
        { text: "It was a picture of us.", emoji: "👫" },
        { text: "Best birthday at school ever!", emoji: "🎉" }
      ],
      questions: [
        { q: "What did I bring to school?", options: ["Cupcakes", "Cookies", "Candles"], correct: "Cupcakes", type: "细节" },
        { q: "What did I do with the candle?", options: ["Made a wish and blew it out", "Lit it", "Gave it to the teacher"], correct: "Made a wish and blew it out", type: "细节" },
        { q: "What did my best friend give me?", options: ["A drawing", "A book", "A cupcake"], correct: "A drawing", type: "细节" },
        { q: "Why was the drawing special?", options: ["It was a picture of us together", "It was very big", "It was in a frame"], correct: "It was a picture of us together", type: "推理" },
        { q: "What is this story mostly about?", options: ["A happy birthday at school", "How to bake cupcakes", "A singing contest"], correct: "A happy birthday at school", type: "主旨" }
      ]
    },
    {
      title: "Grandpa's Garden",
      source: "原创小故事 · 难度对标 RAZ Level E",
      emojiHint: "🧑‍🌾🍅🍓",
      lines: [
        { text: "Every Saturday I help Grandpa in his garden.", emoji: "🏡" },
        { text: "First, we pull the weeds.", emoji: "🌿" },
        { text: "Then we water the plants.", emoji: "💧" },
        { text: "Grandpa grows tomatoes, beans, and corn.", emoji: "🍅" },
        { text: "I like picking strawberries best.", emoji: "🍓" },
        { text: "They are sweet and red.", emoji: "❤️" },
        { text: "We eat some right in the garden.", emoji: "😋" },
        { text: "Grandpa says, \"Fresh is best!\"", emoji: "👍" }
      ],
      questions: [
        { q: "When do I help Grandpa?", options: ["Every Saturday", "Every Sunday", "After school"], correct: "Every Saturday", type: "细节" },
        { q: "What do they do first?", options: ["Pull the weeds", "Water the plants", "Pick strawberries"], correct: "Pull the weeds", type: "细节" },
        { q: "Which food do I like picking best?", options: ["Strawberries", "Tomatoes", "Beans"], correct: "Strawberries", type: "细节" },
        { q: "What does \"Fresh is best\" mean?", options: ["Food from the garden tastes best", "Old food is good", "Buy food at the store"], correct: "Food from the garden tastes best", type: "推理" },
        { q: "What is this story mostly about?", options: ["Working in Grandpa's garden", "How plants grow", "Sweet strawberries"], correct: "Working in Grandpa's garden", type: "主旨" }
      ]
    }
  ]
};
