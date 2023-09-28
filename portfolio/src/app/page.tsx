import Accueil from "@/components/Accueil/Accueil";
import Presentation from "@/components/Presentation/Presentation";
import MyProjects from "@/components/projects/MyProjects";
import "./_page.scss";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="fullpage">
      <Accueil />
      <Presentation />
      <MyProjects />
      <Contact />
      <h1>Footer</h1>
    </main>
  );
}
