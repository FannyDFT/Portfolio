import Accueil from "@/components/Accueil/Accueil";
import Presentation from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <main className="fullpage">
      <Accueil />
      <Presentation />
      <h1>Projets</h1>
    </main>
  );
}
