import Header from "@section/Header";
import Hero from "@section/Hero";

export default function App() {
  return (
    <div className="min-h-svh overflow-x-hidden relative flex flex-col justify-center py-25">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
