import { Suspense } from "react";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Loading from "./components/loading.jsx";
export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <header
        className="grid grid-cols-4 h-screen w-auto bg-black 
                            md:flex md:flex-col md:justify-center md:items-center md:h-fit"
      >
        <NavBar addModal={true} />
        <Section />
      </header>
    </Suspense>
  );
}
