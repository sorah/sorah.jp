"use client";
import type { Song } from "./songs";
import { useForm } from "react-hook-form";

import { thresholdTable, numberInput } from "@/styles/OngekiCalculator.css";

function calculateRating(chartConstant: number, stars: number): number {
  return Math.floor(
    (chartConstant * chartConstant * (stars * 1000)) / (1000 * 1000) / 1000
  );
}

type PrecalculatedRating = {
  level: number;
  constant: number;
  stars: number;
  rating: number;
  ratingFloat: number;
};
const CHART_CONSTANTS: PrecalculatedRating[] = (function () {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const constants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const constants_low = [0, 7];
  const stars = [1, 2, 3, 4, 5];
  const retval = [];
  for (const l of levels) {
    const cs = l < 11 ? constants_low : constants;
    for (const c of cs) {
      const constant = (l * 10 + c) * 100;
      for (const s of stars) {
        let rating = calculateRating(constant, s);
        retval.push({
          level: l,
          constant,
          stars: s,
          rating,
          ratingFloat: rating / 1000,
        });
      }
    }
  }
  retval.sort((a, b) => {
    return a.rating - b.rating;
  });
  return retval;
})();

export type Props = {
  songs: Song[];
};
type FormInput = {
  constant: string;
  maxPlatinumScore: string;
};
type Input = {
  constant: number;
  maxPlatinumScore: number;
};
export default function RatingCalculator(props: Props) {
  const { register, watch } = useForm<FormInput>();

  const input: Input = {
    constant: Number(watch("constant") ?? "0"),
    maxPlatinumScore: Number(watch("maxPlatinumScore") ?? "0"),
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={numberInput}
          type="text"
          inputMode="decimal"
          {...register("constant")}
          placeholder="Chart Constant"
        />
        <input
          className={numberInput}
          type="text"
          inputMode="numeric"
          {...register("maxPlatinumScore")}
          placeholder="Max Platinum Score"
        />
      </form>
      <Result {...input} />
    </>
  );
}
const STARS = [
  { star: 5, thres: 0.98 },
  { star: 4, thres: 0.97 },
  { star: 3, thres: 0.96 },
  { star: 2, thres: 0.95 },
  { star: 1, thres: 0.94 },
];

const Result: React.FC<Input> = ({ constant, maxPlatinumScore }) => {
  console.log({ constant, maxPlatinumScore });
  const relatives = STARS.map(({ star }) => {
    const rating = calculateRating(Math.floor(constant * 1000), star);
    const index = CHART_CONSTANTS.findIndex((e) => e.rating === rating);
    return {
      star,
      rating,
      rows: CHART_CONSTANTS.slice(Math.max(0, index - 5), index + 5),
    };
  });
  const relativeRows = Array(Math.max(...relatives.map((e) => e.rows.length)))
    .fill(0)
    .map((_, i) => i);
  return (
    <div>
      <table className={`${thresholdTable} thresholds`}>
        <thead>
          <tr>
            <th>Star</th>
            <th>P-Score</th>
            <th></th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {STARS.map(({ star, thres }) => {
            const rating = calculateRating(Math.floor(constant * 1000), star);
            const ratingFloat = rating / 1000;
            const requiredPScore = Math.floor(maxPlatinumScore * thres);
            return (
              <tr key={`thres-${star}`}>
                <td>☆{star}</td>
                <td>{requiredPScore}</td>
                <td>
                  {maxPlatinumScore > 0
                    ? `MAX-${maxPlatinumScore - requiredPScore}`
                    : ""}
                </td>
                <td>{ratingFloat.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            {STARS.map(({ star }) => {
              return <th key={`relative-head-${star}`}>☆{star}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {relativeRows.map((i) => {
            return (
              <tr>
                {relatives.map(({ star, rating, rows }) => {
                  const row = rows[i];
                  if (row) {
                    const text = (
                      <>
                        {(row.constant / 1000).toFixed(1)}☆{row.stars} (
                        {row.ratingFloat.toFixed(3)})
                      </>
                    );
                    return (
                      <td key={`relative-row-${i}-${star}`}>
                        {row.rating === rating ? <b>{text}</b> : text}
                      </td>
                    );
                  } else {
                    return <td key={`relative-row-${i}-${star}`}></td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
