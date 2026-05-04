export default function Stats({ packedTrue, list }) {
  const percent = Math.round((100 * packedTrue.length) / (list.length || 1));
  return (
    <div className="stats">
      <p>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${list.length} items on your list, and you already packed ${packedTrue.length} (${percent}%)`}
      </p>
    </div>
  );
}
