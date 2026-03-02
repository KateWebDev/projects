import Content from "@components/Content";
import Image from "@components/Image";

export default function Hero() {
  return (
    <section className="container mx-auto grid lg:grid-cols-2">
      <Content />
      <Image />
    </section>
  );
}
