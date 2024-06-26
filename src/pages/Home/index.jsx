import { Apresentation } from "../../components/Apresentation";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Habilities } from "../../components/Habilities";
import { About } from "../../components/about";
import { Projects } from "../../components/projects";

export function Home(){
    return(
       <>

        <Apresentation />

        <About />

        <Habilities />

        <Projects />

        <Contact />

        <Footer />
       </>
    )
}