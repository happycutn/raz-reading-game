// RAZ 阅读大冒险 · Level G 原创内容包
// 原创分级题库，难度对标 RAZ Level G（复合句、first/then/because 顺序与因果）
window.RAZ_LEVEL_G = {
  level: "G",
  ready: true,
  wordQuestions: [
    { emoji: "🌱", correct: "seedling", options: ["seedling", "seed", "sprinkler", "stem"] },
    { emoji: "🌋", correct: "volcano", options: ["volcano", "valley", "village", "vacation"] },
    { emoji: "🔬", correct: "microscope", options: ["microscope", "telescope", "magnifier", "camera"] },
    { emoji: "🔭", correct: "telescope", options: ["telescope", "microscope", "periscope", "projector"] },
    { emoji: "🧭", correct: "compass", options: ["compass", "campus", "clock", "camera"] },
    { emoji: "🦴", correct: "fossil", options: ["fossil", "bone", "stone", "shell"] },
    { emoji: "🌾", correct: "wheat", options: ["wheat", "weed", "wood", "water"] },
    { emoji: "🛰️", correct: "satellite", options: ["satellite", "rocket", "airplane", "balloon"] },
    { emoji: "🌪️", correct: "tornado", options: ["tornado", "typhoon", "thunder", "tsunami"] },
    { emoji: "🌊", correct: "wave", options: ["wave", "wind", "waterfall", "whirlpool"] },
    { emoji: "🌨️", correct: "blizzard", options: ["blizzard", "breeze", "cloud", "drizzle"] },
    { emoji: "🦉", correct: "owl", options: ["owl", "eagle", "crow", "duck"] },
    { emoji: "🕷️", correct: "spider", options: ["spider", "ant", "bee", "beetle"] },
    { emoji: "🐊", correct: "crocodile", options: ["crocodile", "alligator", "lizard", "turtle"] },
    { emoji: "🌵", correct: "cactus", options: ["cactus", "carrot", "palm", "pine"] },
    { emoji: "💎", correct: "crystal", options: ["crystal", "diamond", "stone", "glass"] },
    { emoji: "🧲", correct: "magnet", options: ["magnet", "metal", "motor", "mirror"] },
    { emoji: "🛶", correct: "canoe", options: ["canoe", "boat", "ship", "raft"] },
    { emoji: "🌅", correct: "sunrise", options: ["sunrise", "sunset", "sunshine", "sundial"] },
    { emoji: "🪨", correct: "rock", options: ["rock", "road", "root", "ring"] }
  ],
  sentenceQuestions: [
    { type: "fill", text: "First the seed sprouts, ___ the plant grows tall.", options: ["then", "but", "or"], correct: "then" },
    { type: "fill", text: "The desert is dry, ___ the cactus stores water inside.", options: ["so", "but", "because"], correct: "so" },
    { type: "fill", text: "We couldn't see the stars ___ the clouds covered the sky.", options: ["because", "and", "so"], correct: "because" },
    { type: "fill", text: "The magnet picked up the pins ___ they were made of iron.", options: ["because", "although", "until"], correct: "because" },
    { type: "fill", text: "___ the rain stopped, a rainbow appeared.", options: ["After", "Before", "Until"], correct: "After" },
    { type: "fill", text: "Owls sleep in the day ___ hunt at night.", options: ["and", "but", "or"], correct: "and" },
    { type: "match", text: "The volcano rumbled and smoke rose from the top.", correctEmoji: "🌋", options: ["🌋", "🏔️", "🌪️"] },
    { type: "match", text: "The tornado spun across the fields, bending the trees.", correctEmoji: "🌪️", options: ["🌪️", "🌊", "❄️"] },
    { type: "match", text: "The crocodile slid into the river without a sound.", correctEmoji: "🐊", options: ["🐊", "🦆", "🐢"] },
    { type: "match", text: "The satellite circles the Earth, taking photos from space.", correctEmoji: "🛰️", options: ["🛰️", "✈️", "🚀"] },
    { type: "match", text: "The sun peeked over the hills. A new day began.", correctEmoji: "🌅", options: ["🌅", "🌇", "🌄"] },
    { type: "match", text: "The spider spun a web to catch its dinner.", correctEmoji: "🕷️", options: ["🕷️", "🐝", "🐜"] }
  ],
  passages: [
    {
      title: "How a Seed Grows",
      source: "Original Story · Level G",
      emojiHint: "🌱🌞💧🌸",
      lines: [
        { text: "A tiny seed holds a big surprise.", emoji: "🌰" },
        { text: "First, the seed falls to the ground.", emoji: "⬇️" },
        { text: "Rain and sun warm the soil.", emoji: "🌞" },
        { text: "Then the seed cracks open, and a root grows down.", emoji: "🌱" },
        { text: "Next, a small stem pushes up toward the light.", emoji: "🆙" },
        { text: "Leaves unfold to catch the sunshine.", emoji: "🍃" },
        { text: "The plant makes its own food from light and water.", emoji: "💧" },
        { text: "Finally, flowers bloom and make new seeds.", emoji: "🌸" },
        { text: "Then the whole story starts again!", emoji: "🔁" }
      ],
      questions: [
        { q: "What happens first?", options: ["The seed falls to the ground", "Flowers bloom", "Leaves unfold"], correct: "The seed falls to the ground", type: "细节" },
        { q: "What grows down when the seed cracks open?", options: ["A root", "A leaf", "A flower"], correct: "A root", type: "细节" },
        { q: "What do leaves do?", options: ["Catch the sunshine", "Make new seeds", "Grow down"], correct: "Catch the sunshine", type: "细节" },
        { q: "Why does the story start again at the end?", options: ["New seeds grow into new plants", "The plant dies", "Spring comes back"], correct: "New seeds grow into new plants", type: "推理" },
        { q: "What is this passage mostly about?", options: ["The steps of how a seed grows", "Why plants need water", "Kinds of flowers"], correct: "The steps of how a seed grows", type: "主旨" }
      ]
    },
    {
      title: "Animals of the Desert",
      source: "Original Story · Level G",
      emojiHint: "🌵🦎🐀",
      lines: [
        { text: "The desert is hot and dry, but many animals live there.", emoji: "🌵" },
        { text: "The roadrunner runs fast to catch lizards.", emoji: "🦎" },
        { text: "The kangaroo rat never drinks water!", emoji: "🐀" },
        { text: "It gets water from the seeds it eats.", emoji: "🌰" },
        { text: "Most desert animals hide under rocks or in holes during the day.", emoji: "🪨" },
        { text: "They come out at night when it is cool.", emoji: "🌙" },
        { text: "The cactus wren builds its nest inside a cactus.", emoji: "🪺" },
        { text: "The sharp spines keep other animals away.", emoji: "📌" },
        { text: "Desert animals have clever ways to survive.", emoji: "✨" }
      ],
      questions: [
        { q: "How does the kangaroo rat get water?", options: ["From the seeds it eats", "From a river", "From the rain"], correct: "From the seeds it eats", type: "细节" },
        { q: "Where do most desert animals stay during the day?", options: ["Under rocks or in holes", "In tall trees", "In the open sand"], correct: "Under rocks or in holes", type: "细节" },
        { q: "Where does the cactus wren build its nest?", options: ["Inside a cactus", "Under a rock", "On the ground"], correct: "Inside a cactus", type: "细节" },
        { q: "Why do desert animals come out at night?", options: ["Because it is cooler", "Because they can't see in the day", "Because food only grows at night"], correct: "Because it is cooler", type: "推理" },
        { q: "What is this passage mostly about?", options: ["Clever desert animals", "Hot weather", "The roadrunner's speed"], correct: "Clever desert animals", type: "主旨" }
      ]
    },
    {
      title: "A Storm Is Coming",
      source: "Original Story · Level G",
      emojiHint: "⛈️🌈",
      lines: [
        { text: "Dark clouds piled up like mountains in the sky.", emoji: "☁️" },
        { text: "The wind began to whistle through the trees.", emoji: "🌬️" },
        { text: "Booms of thunder rolled across the valley.", emoji: "⛈️" },
        { text: "Lightning flashed, bright as a camera flash.", emoji: "⚡" },
        { text: "You can count the seconds between the flash and the boom!", emoji: "🔢" },
        { text: "If the storm is far away, the count is long.", emoji: "⏱️" },
        { text: "When the count is short, the storm is near.", emoji: "⚠️" },
        { text: "Soon, heavy raindrops hammered the roof.", emoji: "🌧️" },
        { text: "After the storm passed, a rainbow stretched across the sky.", emoji: "🌈" }
      ],
      questions: [
        { q: "What piled up in the sky?", options: ["Dark clouds", "Gray birds", "Big kites"], correct: "Dark clouds", type: "细节" },
        { q: "What can you count during a storm?", options: ["Seconds between the flash and the boom", "Raindrops on the roof", "Clouds in the sky"], correct: "Seconds between the flash and the boom", type: "细节" },
        { q: "A short count means the storm is ___.", options: ["Near", "Far away", "Over"], correct: "Near", type: "细节" },
        { q: "Why can we count seconds to know how far the storm is?", options: ["Light and sound travel at different speeds", "Thunder is very loud", "Clouds move slowly"], correct: "Light and sound travel at different speeds", type: "推理" },
        { q: "What is this passage mostly about?", options: ["What happens when a storm comes", "How rainbows form", "Loud thunder sounds"], correct: "What happens when a storm comes", type: "主旨" }
      ]
    }
  ]
};
