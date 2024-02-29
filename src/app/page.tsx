import ChatBox from "./examples/projectOnboarder/ProjectOnboarder";
import EcommerceSuggester from "./examples/ecommerce/EcommerceSuggester";
import ImageGenerator from "./examples/imageGenerator/ImageGenerator";

export default function Home() {
  return (
    <main className="min-h-screen p-24 space-y-8">
      <h1 className="text-5xl">AI starter kit</h1>
      <h2 className="text-xl">Ni ska i teams av 2 komma på en idé på något roligt ni vill utveckla!</h2>
      <p>Jag har förberett en startmall för er, som inkluderar tre olika AI-exempelidéer. Ni har tillgång till all kod för att använda som grund. Valet är ert: ni kan antingen implementera något eget och unikt, eller bygga vidare på de exempel som redan finns med.</p>
      <div className="h-screen" />
      <p className="underline text-6xl pb-12">Exempel:</p>
      <div className="grid gap-20">
        <ChatBox />
        <EcommerceSuggester />
        <ImageGenerator />
      </div>
      <div className="h-screen flex items-center">
        <iframe
          src="https://giphy.com/embed/eunrMjB8lBUKeL1fqD"
          className="h-[40rem] w-full"
        ></iframe>
      </div>
    </main>
  );
}
