import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    background: "tan",
  },
  stars: {
    display: "flex",
    alignItems: "center",
  },
  star: {
    display: "block",
    cursor: "pointer",
  },
  text: {
    margin: "0",
    padding: "0",
    lineHeight: "1",
  },
};

const defaultVar = {
  numStars: 5,
  colorStroke: "#000000",
  colorFill: "#000000",
  widthStroke: 1,
  sizeStar: "10px",
  text: true,
  className: "rating",
  defaultRating: 0,
};

export default function Rating({
  numStars = defaultVar.numStars,
  colorStroke = defaultVar.colorStroke,
  colorFill = defaultVar.colorFill,
  widthStroke = defaultVar.widthStroke,
  sizeStar = defaultVar.sizeStar,
  text = defaultVar.text,
  className = defaultVar.className,
  defaultRating = defaultVar.defaultRating,
}) {
  const [numRating, setNumRating] = useState(defaultRating);
  const [tempNumRating, setTempNumRating] = useState(0);

  function handleRating(newRating) {
    setNumRating(newRating);
  }

  return (
    <div className={className} style={styles.container}>
      <div style={styles.stars}>
        {Array.from({ length: numStars }, (_, index) => (
          <Star
            key={index}
            onClick={() => handleRating(index + 1)}
            activeStar={tempNumRating ? tempNumRating >= index + 1 : numRating >= index + 1 ? true : false}
            onMouseOver={() => handleRating(index + 1)}
            onMouseEnter={() => setTempNumRating(index + 1)}
            onMouseLeave={() => setTempNumRating(0)}
            widthStroke={widthStroke}
            colorStroke={colorStroke}
            colorFill={colorFill}
            sizeStar={sizeStar}
          />
        ))}
      </div>
      {text && <p style={styles.text}> {tempNumRating || numRating || ""}</p>}
    </div>
  );
}

function Star({ onClick, onMouseEnter, onMouseLeave, activeStar, widthStroke, colorStroke, colorFill, sizeStar }) {
  return (
    <span
      style={{ ...styles.star, width: sizeStar, height: sizeStar }}
      role="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke={colorStroke}
        fill={activeStar ? colorFill : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={widthStroke}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </span>
  );
}
