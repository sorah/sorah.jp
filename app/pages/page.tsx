import { styleFooterLi } from "@/styles/PagesPage.css";
import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import Link from "next/link";

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
          </ul>
        </nav>
      </article>
    </main>
  );
}
