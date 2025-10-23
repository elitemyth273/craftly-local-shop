const EmojiSlider = () => {
  const emojis = ['🖇️', '📦', '🗃️', '🗑️', '✉', '📑', '🛒'];
  
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-4 border-b border-border">
      <div className="flex animate-slide-infinite whitespace-nowrap">
        {/* First set of emojis */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-1-${index}`}
            className="text-5xl mx-8 inline-block grayscale-0"
            style={{ filter: 'none' }}
          >
            {emoji}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-2-${index}`}
            className="text-5xl mx-8 inline-block grayscale-0"
            style={{ filter: 'none' }}
          >
            {emoji}
          </span>
        ))}
        {/* Third set for extra smoothness */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-3-${index}`}
            className="text-5xl mx-8 inline-block grayscale-0"
            style={{ filter: 'none' }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiSlider;
