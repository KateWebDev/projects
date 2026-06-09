import { toast } from "react-toastify";

export default function SingleColor({ color, index }) {
  async function saveToClipboard() {
    // проверяем, доступно ли в  браузере копирование в буфер обмена
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("the value is saved in the clipboard");
      } catch (error) {
        toast.error("the value is not saved in the clipboard");
      }
    } else {
      toast.error("the clipboard is disabled");
    }
  }

  return (
    <div className="color" style={{ background: `#${color.hex}` }} onClick={saveToClipboard}>
      <p className="percent-value "> {color.weight}%</p>
      <p className="color-value ">#{color.hex}</p>
    </div>
  );
}
