import type { Route } from "./+types/home";
import { OrthodoxDemo } from "../components/orthodox-demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Orthodox Youth Lagos - Faith • Community • Growth" },
    { name: "description", content: "Connect with Orthodox youth community in Lagos, Nigeria. Join us for Bible study, community service, and spiritual growth." },
    { name: "keywords", content: "Orthodox, Youth, Lagos, Nigeria, Christianity, Community, Faith, Bible Study" },
    { property: "og:title", content: "Orthodox Youth Lagos" },
    { property: "og:description", content: "Connecting young hearts with ancient faith in Lagos, Nigeria" },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <OrthodoxDemo />;
}
