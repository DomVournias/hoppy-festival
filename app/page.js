import About from "./components/sections/About";
import Actions from "./components/sections/Actions";
import Festival from "./components/sections/Festival";
import Hero from "./components/sections/Hero";
import Info from "./components/sections/Info";
import Modal from "./components/modals/Modal";
import Sponsors from "./components/sections/Sponsors";
import Testimonials from "./components/sections/Testimonials";
import Upcoming from "./components/sections/Upcoming";
import { fetchHomeSections } from "@/api/functions";

export default async function Home() {
  const res = await fetchHomeSections();

  const sections = res.data.sectionCategory.sections.nodes;

  const getSectionBySlug = (slug) => {
    const section = sections.find((item) => item.slug === slug);

    return section[slug];
  };

  return (
    <>
      <Hero section={getSectionBySlug("hero")} />
      <Upcoming section={getSectionBySlug("upcoming")} />
      <Festival section={getSectionBySlug("festival")} />
      <Actions section={getSectionBySlug("actions")} />
      <Sponsors section={getSectionBySlug("sponsors")} />
      <Info section={getSectionBySlug("info")} />
      <About section={getSectionBySlug("about")} />
      <Testimonials section={getSectionBySlug("testimonials")} />
      <Modal />
    </>
  );
}
