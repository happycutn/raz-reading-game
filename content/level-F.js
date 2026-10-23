// RAZ 阅读大冒险 · Level F 原创内容包
// 原创分级题库，难度对标 RAZ Level F（8-12 词句、故事结构完整）
window.RAZ_LEVEL_F = {
  level: "F",
  ready: true,
  wordQuestions: [
    { emoji: "🌈", correct: "rainbow", options: ["rainbow", "raincoat", "raindrop", "rainfall"] },
    { emoji: "🐺", correct: "wolf", options: ["wolf", "wolverine", "woodchuck", "warthog"] },
    { emoji: "🌉", correct: "bridge", options: ["bridge", "beach", "building", "bush"] },
    { emoji: "🧦", correct: "sock", options: ["sock", "shoe", "shirt", "shorts"] },
    { emoji: "🔑", correct: "key", options: ["key", "king", "kid", "kit"] },
    { emoji: "🍪", correct: "cookie", options: ["cookie", "cake", "candy", "cracker"] },
    { emoji: "🕯️", correct: "candle", options: ["candle", "camera", "candy", "cabin"] },
    { emoji: "🎁", correct: "present", options: ["present", "preview", "packet", "puppet"] },
    { emoji: "🏥", correct: "hospital", options: ["hospital", "hotel", "house", "highway"] },
    { emoji: "🎨", correct: "paint", options: ["paint", "paper", "pencil", "pasta"] },
    { emoji: "🐢", correct: "turtle", options: ["turtle", "turkey", "toucan", "tapir"] },
    { emoji: "🍯", correct: "honey", options: ["honey", "money", "jam", "syrup"] },
    { emoji: "🐝", correct: "bee", options: ["bee", "bear", "bird", "bug"] },
    { emoji: "🎺", correct: "trumpet", options: ["trumpet", "trombone", "triangle", "tuba"] },
    { emoji: "🧣", correct: "scarf", options: ["scarf", "shirt", "shoe", "skirt"] },
    { emoji: "⛺", correct: "tent", options: ["tent", "train", "tree", "truck"] },
    { emoji: "🗺️", correct: "map", options: ["map", "mop", "mat", "mask"] },
    { emoji: "🧺", correct: "basket", options: ["basket", "bucket", "bottle", "blanket"] },
    { emoji: "🪄", correct: "magic", options: ["magic", "music", "money", "magnet"] },
    { emoji: "👵", correct: "grandma", options: ["grandma", "grandpa", "aunt", "cousin"] }
  ],
  sentenceQuestions: [
    { type: "fill", text: "The goats wanted to cross the ___. But someone lived under it!", options: ["bridge", "river", "mountain"], correct: "bridge" },
    { type: "fill", text: "The turtle is slow, but he never ___.", options: ["stops", "wins", "flies"], correct: "stops" },
    { type: "fill", text: "Grandma baked cookies. The smell made everyone ___.", options: ["hungry", "sleepy", "angry"], correct: "hungry" },
    { type: "fill", text: "We looked at the ___ to find our way home.", options: ["map", "book", "clock"], correct: "map" },
    { type: "fill", text: "The bee flies from flower to flower to make ___.", options: ["honey", "bread", "milk"], correct: "honey" },
    { type: "fill", text: "It was cold outside, so I put on my ___.", options: ["scarf", "swimsuit", "sandals"], correct: "scarf" },
    { type: "match", text: "The wolf huffed and puffed, but the brick house stood strong.", correctEmoji: "🐺🏠", options: ["🐺🏠", "🐷🏠", "🐻🏠"] },
    { type: "match", text: "The little girl skipped across the rainbow bridge.", correctEmoji: "🌈", options: ["🌈", "🌉", "🌊"] },
    { type: "match", text: "The knight found the key to the castle gate.", correctEmoji: "🔑", options: ["🔑", "🎁", "🍪"] },
    { type: "match", text: "We pitched our tent under the tall pines.", correctEmoji: "⛺", options: ["⛺", "🏠", "🏰"] },
    { type: "match", text: "The bear found a pot of golden honey.", correctEmoji: "🍯", options: ["🍯", "🥛", "🍎"] },
    { type: "match", text: "He played a happy song on his trumpet.", correctEmoji: "🎺", options: ["🎺", "🎸", "🥁"] }
  ],
  passages: [
    {
      title: "The Brave Little Mouse",
      source: "Original Story · Level F",
      emojiHint: "🐭🧀🐱",
      lines: [
        { text: "A little mouse lived in a cozy hole under the stairs.", emoji: "🐭" },
        { text: "One night, she smelled cheese from the kitchen.", emoji: "🧀" },
        { text: "But between her and the cheese sat a sleeping cat!", emoji: "🐱" },
        { text: "The mouse thought hard. Then she had a plan.", emoji: "💡" },
        { text: "She tiptoed past the table.", emoji: "🤫" },
        { text: "She hid behind a chair and waited.", emoji: "🪑" },
        { text: "When the cat rolled over, she grabbed the cheese and ran!", emoji: "🏃" },
        { text: "At home, she shared the cheese with her family.", emoji: "❤️" },
        { text: "Being brave made the treat twice as sweet.", emoji: "✨" }
      ],
      questions: [
        { q: "Where did the mouse live?", options: ["Under the stairs", "In the kitchen", "Behind the chair"], correct: "Under the stairs", type: "细节" },
        { q: "What sat between the mouse and the cheese?", options: ["A sleeping cat", "A big dog", "A tall table"], correct: "A sleeping cat", type: "细节" },
        { q: "How did the mouse get past the cat?", options: ["She tiptoed and hid, then ran", "She woke the cat up", "She asked the cat nicely"], correct: "She tiptoed and hid, then ran", type: "细节" },
        { q: "Why was the treat \"twice as sweet\"?", options: ["She worked hard and shared it", "It was made of sugar", "Her family bought more"], correct: "She worked hard and shared it", type: "推理" },
        { q: "What is this story mostly about?", options: ["A brave mouse on a cheese hunt", "A lazy sleeping cat", "A family dinner"], correct: "A brave mouse on a cheese hunt", type: "主旨" }
      ]
    },
    {
      title: "The Kite Contest",
      source: "Original Story · Level F",
      emojiHint: "🪁💨🏆",
      lines: [
        { text: "Ben made a kite for the spring contest.", emoji: "🪁" },
        { text: "He used paper, sticks, and a long red tail.", emoji: "🟥" },
        { text: "On the big day, the wind did not blow.", emoji: "😶" },
        { text: "Ben's kite would not fly. He felt sad.", emoji: "😢" },
        { text: "Then his friend Ana had an idea.", emoji: "💡" },
        { text: "\"Let's run together!\" she said.", emoji: "🏃‍♀️" },
        { text: "They ran across the field as fast as they could.", emoji: "💨" },
        { text: "The kite lifted into the sky!", emoji: "🎉" },
        { text: "Flying together was the best prize of all.", emoji: "🏆" }
      ],
      questions: [
        { q: "What did Ben make?", options: ["A kite", "A paper plane", "A red hat"], correct: "A kite", type: "细节" },
        { q: "What was the problem on the big day?", options: ["The wind did not blow", "The kite was broken", "Ben was sick"], correct: "The wind did not blow", type: "细节" },
        { q: "What was Ana's idea?", options: ["Run together to make wind", "Buy a new kite", "Wait for next year"], correct: "Run together to make wind", type: "细节" },
        { q: "What does \"the best prize of all\" mean?", options: ["Flying together with a friend", "Winning a gold medal", "Making a new kite"], correct: "Flying together with a friend", type: "推理" },
        { q: "What is this story mostly about?", options: ["Friends solving a problem together", "How kites are made", "A windy spring day"], correct: "Friends solving a problem together", type: "主旨" }
      ]
    },
    {
      title: "The Lost Mitten",
      source: "Original Story · Level F",
      emojiHint: "🧤❄️💌",
      lines: [
        { text: "Winter wind blew snow over the little town.", emoji: "❄️" },
        { text: "On her way home, Nina lost her red mitten.", emoji: "🧤" },
        { text: "She looked by the bus stop.", emoji: "🚌" },
        { text: "She looked by the bakery.", emoji: "🍞" },
        { text: "No mitten anywhere. Nina went to bed sad.", emoji: "😔" },
        { text: "The next morning, something hung on her door.", emoji: "🚪" },
        { text: "It was her mitten, clean and warm!", emoji: "✨" },
        { text: "A note said, \"I found it and washed it. Your friend, Tom.\"", emoji: "💌" },
        { text: "Nina smiled all day. A kind friend makes winter warm.", emoji: "😊" }
      ],
      questions: [
        { q: "What did Nina lose?", options: ["Her red mitten", "Her school bag", "Her warm hat"], correct: "Her red mitten", type: "细节" },
        { q: "Where did Nina look for it?", options: ["Bus stop and bakery", "School and park", "Her room and yard"], correct: "Bus stop and bakery", type: "细节" },
        { q: "Who found the mitten?", options: ["Her friend Tom", "Her mother", "A police officer"], correct: "Her friend Tom", type: "细节" },
        { q: "Why did Nina smile all day?", options: ["Her friend was kind to her", "She found money", "Winter was over"], correct: "Her friend was kind to her", type: "推理" },
        { q: "What is this story mostly about?", options: ["A lost mitten and a kind friend", "How snow falls", "A trip to the bakery"], correct: "A lost mitten and a kind friend", type: "主旨" }
      ]
    }
  ]
};
