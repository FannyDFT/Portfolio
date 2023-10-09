import Accueil from "@/components/Home/Home";
import Presentation from "@/components/About/About";
import MyProjects from "@/components/projects-accueil/MyProjects";
import "./_page.scss";
import Contact from "@/components/contact/Contact";

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
