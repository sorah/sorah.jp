import {
  styleHeader,
  styleHeaderBrandLink,
  styleHeaderH1,
  styleHeaderNav,
  styleHeaderNavMobileHidden,
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
        <div className={styleHeaderNavMobileHidden}>
          <Link href="/about">about</Link>
        </div>
        <div className={styleHeaderNavMobileHidden}>
          <Link href="/id">ids</Link>
        </div>
        <div>
          <Link href="/pages">pages</Link>
        </div>
        <div>
          <a href="https://blog.sorah.jp/" aria-label="English Blog">
            blog [en]
          </a>
        </div>
        <div>
          <a href="https://diary.sorah.jp/" aria-label="Japanese Blog">
            blog [ja]
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
