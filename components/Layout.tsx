import type { NextPage } from "next";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
