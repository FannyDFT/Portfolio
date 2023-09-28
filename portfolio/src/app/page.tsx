import Accueil from "@/components/Accueil/Accueil";
import Presentation from "@/components/Presentation/Presentation";
import MyProjects from "@/components/projects/MyProjects";
import "./_page.scss";

export default function Home() {
  return (
    <main className="fullpage">
      <Accueil />
      <Presentation />
      <MyProjects />
      <h1>Contact</h1>
    </main>
  );
}
