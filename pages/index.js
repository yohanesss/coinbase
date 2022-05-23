import { CMCTable } from "../components/cmc-table/CMCTable";
import { Header } from "../components/Header";
import Trending from "../components/trending";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="m-10">
        <Trending />
      </div>
      <div className="mt-20">
        <CMCTable />
      </div>
    </div>
  );
}
