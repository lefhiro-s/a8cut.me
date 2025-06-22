const emojiPool = [
    "😏", "😈", "👅", "💦", "🍆", "🍑", "🌶️", "💋", "❤️",
    "🥵", "🔥", "😛", "😜", "🤤", "🖤", "💥", "🛌", "🤭",
    "🥂", "🍷", "👠", "🌹", "🥀", "👄", "🙈", "🙊", "💝",
    "🎀", "🔞", "💘", "🤎", "💜", "💞", "💗", "💓", "💖", "💕",
    "💌", "🕯️", "🛀", "🌙", "🍒", "🔐", "🎥", "📹", "🖤",
    "💣", "💯", "😳", "😉", "🥴", "💍", "🍫", "🍾"
  ];
      
  
  function getRandomEmojis(count) {
    const shuffled = [...emojiPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  export function generateOrbitConfig() {
    return [
      {
        icons: getRandomEmojis(Math.floor(Math.random() * 6) + 5), // 5–10
        size: 600,
        animation: "orbit",
      },
      {
        icons: getRandomEmojis(Math.floor(Math.random() * 6) + 10), // 10–15
        size: 950,
        animation: "orbit-reverse",
      },
      {
        icons: getRandomEmojis(Math.floor(Math.random() * 6) + 5), // 5–10
        size: 1500,
        animation: "orbit",
      },
    ];
  }
  