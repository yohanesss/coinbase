import { Header } from "../components/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10">{/* <Trending /> */}</div>
      <div className="mt-20">{/* <CMTable /> */}</div>
    </div>
  );
}
