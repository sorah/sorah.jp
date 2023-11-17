import { styleIdentifier } from "@/styles/Identifier.css";

export const Identifier: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <span className={styleIdentifier}>
      <a rel="me" href={href}>
        {children}
      </a>
    </span>
  );
};
