import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {
  const [isOpenButton, setOpenButton] = useState(true);

  return (
    <div className="box">
      <Button isOpenButton={isOpenButton} onClick={() => setOpenButton((prev) => !prev)} />
      {isOpenButton && children}
    </div>
  );
}
