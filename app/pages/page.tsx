import { styleFooterLi } from "@/styles/PagesPage.css";
import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pages",
  description: null,
  alternates: {
    canonical: "/pages",
  },
};

export default async function PagesPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <header>
          <h1>{"Pages"}</h1>
        </header>

        <nav>
          <ul>
            <li className={styleFooterLi}>
              <Link href="/pages/debian">Sorah's Debian Packages</Link>
            </li>
            <li className={styleFooterLi}>
              <Link href="/pages/salary">Sorah's Compensation (Salary)</Link>
            </li>
            <li className={styleFooterLi}>
              <Link href="/pages/event-radio">
                イベント・トランシーバー・ガイド
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
