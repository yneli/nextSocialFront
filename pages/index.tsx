import { Inter } from "@next/font/google";
import style from "../styles/Home.module.scss";
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={style.container}>
      <h3>Home</h3>
    </div>
  );
};
