import { useEffect } from "react";

export default function Timer({ timer, dispath }) {
  const minutes = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const time = setInterval(() => {
      dispath({ type: "timer" });
    }, 1000);

    return () => clearInterval(time);
  }, [dispath]);

  return (
    <>
      <div className="timer">{minutes}</div>
    </>
  );
}
