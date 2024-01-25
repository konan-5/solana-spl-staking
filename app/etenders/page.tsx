import { Metadata } from "next";
import Etenders from "@/components/Etenders";

export const metadata: Metadata = {
  title: "Tendr",
  description: "Automated tendering process",
};

export default function Home() {
  return (
    <>
      <Etenders />
    </>
  );
}
