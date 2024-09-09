import { ReactNode } from "react";
import styles from "@styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
