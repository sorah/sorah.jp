import {
  styleHeader,
  styleHeaderBrandLink,
  styleHeaderH1,
  styleHeaderNav,
} from "@/styles/blog/Header.css";
import Link from "next/link";

export const Header: React.FC<{}> = () => {
  return (
    <header className={styleHeader}>
      <h1 className={styleHeaderH1}>
        <Link href="/" className={styleHeaderBrandLink}>
          sorah.jp
        </Link>
      </h1>
      <nav className={styleHeaderNav}>
        <a href="https://blog.sorah.jp/">Blog [en]</a>
        <a href="https://diary.sorah.jp/">Blog [ja]</a>
      </nav>
    </header>
  );
};

export default Header;
