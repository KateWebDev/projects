import Button from "@components/Button";
import Navigation from "@components/Navigation";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <header className=" container mx-auto flex justify-between items-center gap-10 py-5 px-4 absolute top-0 left-0 right-0 h-auto">
      <a className="flex items-center gap-x-2.5 font-bold text-xl tracking-wide hover:text-accent trans" href="/">
        <FaCode size={24} />
        Programmer
      </a>
      <Navigation />
      <Button size="sm">Contact me</Button>
    </header>
  );
}
