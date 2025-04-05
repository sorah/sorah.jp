import songs from "@/public/data/fetch/ongeki_songs.json";

export type Song = {
  title: string;
  difficulty: string;
  constant: number;
  estimated: boolean;
};

const Songs = songs as Song[];
export default Songs;
