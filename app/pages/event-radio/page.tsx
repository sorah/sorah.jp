import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import { Metadata } from "next";

import Content from "@/md/event-radio.mdx";

export const metadata: Metadata = {
  title: "イベント・トランシーバー・ガイド",
  description:
    "カンファレンスなどのイベント運用時におけるトランシーバーの使い方",
  alternates: {
    canonical: "/pages/event-radio",
  },
};

export default async function EventRadioPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <header>
          <h1>イベント・トランシーバー・ガイド</h1>
          <Content />
        </header>
      </article>
    </main>
  );
}
