import Accueil from "@/components/Home/Home";
import Presentation from "@/components/About/About";
import MyProjects from "@/components/Projects/content/MyProjects";
import "./_page.scss";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="fullpage">
      <Accueil />
      <Presentation />
      <MyProjects />
      <Contact />
    </main>
  );
}
