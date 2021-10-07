import Costumer from "../components/Costumer";
import Project from "../components/Project";
import Services from "../components/Services";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Services />
      <Costumer />
      <Project />
    </div>
  );
}
