import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import { Metadata } from "next";

import Songs from "./songs";
import RatingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Ongeki Re:Fresh Platinum Rating Calculator",
  description: "Ongeki Re:Fresh Platinum Rating Calculator",
  alternates: {
    canonical: "/pages/ongeki-p-rating",
  },
};

export default async function CalculatorPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <header>
          <h1>Ongeki Platinum Rating Calculator</h1>
        </header>
        <RatingCalculator songs={Songs} />
      </article>
    </main>
  );
}
