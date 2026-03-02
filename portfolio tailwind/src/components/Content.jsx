import Button from "@components/Button";

export default function Content() {
  return (
    <div className="flex flex-col gap-10 items-start">
      <div className="animate-fade-in">
        <div className="flex items-center gap-x-2 text-accent rounded-full glass px-4 py-2 text-sm capitalize">
          <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
          Software Engineer
        </div>
      </div>
      <h1 className=" text-5xl leading-15 md:text-6xl md:leading-20 lg:text-7xl lg:leading-25 animate-fade-in animation-delay-200">
        Creating <span className="font-doto text-accent glow-text">digital</span> products with <em>excellence</em>.
      </h1>
      <p className="max-w-[80%] animate-fade-in animation-delay-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi saepe reprehenderit adipisci modi
        ullam officia quisquam blanditiis repellat! Adipisci!
      </p>
      <div className="flex items-center gap-2 ">
        <Button className="animate-fade-in animation-delay-400">Contact me</Button>
        <Button className="animate-fade-in animation-delay-450" transparent={true}>
          Download CV
        </Button>
      </div>
    </div>
  );
}
