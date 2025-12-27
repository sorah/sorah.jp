import {
  styleCompensationSection,
  styleCompensationTable,
} from "@/styles/SalaryPage.css";
import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compensation (Salary)",
  description: "Sorah Fukumori's Compensation data",
  alternates: {
    canonical: "/pages/salary",
  },
};

type CompensationEntry = {
  year: number;
  month?: number;
  currency: string;
  base: number;
  bonus?: number;
  extra?: () => JSX.Element;
  employmentIncomeWithholdingRecordUnavailable?: boolean;
};

function quickEntry(
  year: number,
  base: number,
  bonus?: number,
): CompensationEntry {
  return {
    year,
    currency: "JPY",
    base: base * 10000,
    bonus: bonus ? bonus * 10000 : undefined,
  };
}

const COMPENSATION_DATA: CompensationEntry[] = [
  { ...quickEntry(2013, 400), month: -1 },
  { ...quickEntry(2014, 417), month: -1 },
  { ...quickEntry(2015, 480, 10), month: -1 },
  { ...quickEntry(2016, 650, 30), month: -1 },
  { ...quickEntry(2017, 768), month: -1 },
  {
    ...quickEntry(2018, 800.1),
    extra: () => (
      <>
        <a href="https://img.sorah.jp/s/2019-02-05_1702_d6392.png">
          JCIOI: 3,003,000 JPY
        </a>
      </>
    ),
  },
  quickEntry(2019, 800.1),
  { ...quickEntry(2019, 835.2), month: 8 },
  quickEntry(2020, 850.2),
  quickEntry(2021, 900, 20),
  { ...quickEntry(2021, 1000.2), month: 8 },
  quickEntry(2022, 1000.2),
  quickEntry(2023, 1020, 60),
  quickEntry(2024, 1300.8, 100),
  {
    ...quickEntry(2025, 1480, 0),
    employmentIncomeWithholdingRecordUnavailable: true,
    month: 2,
  },
  {
    ...quickEntry(2025, 1650, 0),
    employmentIncomeWithholdingRecordUnavailable: true,
    month: 4,
  },
  // TODO: Cookpad kou tax certificate: https://img.sorah.jp/x/20251113_115652_JbvnBUqmdE.png
];

export default async function SalaryPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <header>
          <h1>{"Sorah's Compensation (Salary)"}</h1>
        </header>

        <section className={styleCompensationSection}>
          <table className={styleCompensationTable}>
            <thead>
              <tr>
                <th>Since</th>
                <th>Annual Base</th>
                <th>Bonus</th>
                <th>Extra (side job, etc)</th>
              </tr>
            </thead>
            <tbody>
              {COMPENSATION_DATA.map((v, i) => (
                <CompensationRow key={i} entry={v} />
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}

const CompensationRow: React.FC<{ entry: CompensationEntry }> = ({ entry }) => {
  const since =
    entry.month === -1 ? `${entry.year}` : `${entry.year}/${entry.month ?? 1}-`;
  return (
    <tr>
      <td>
        {entry.employmentIncomeWithholdingRecordUnavailable ? (
          since
        ) : (
          <a href={`https://img.sorah.jp/s/salary${entry.year}.png`}>{since}</a>
        )}
      </td>
      <td align="right">
        {entry.base.toLocaleString("en-US", { style: "decimal" })}{" "}
        {entry.currency}
      </td>
      <td align="right">
        {entry.bonus
          ? `${entry.bonus.toLocaleString("en-US", { style: "decimal" })} ${
              entry.currency
            }`
          : null}
      </td>
      <td>{entry.extra ? entry.extra() : null}</td>
    </tr>
  );
};
