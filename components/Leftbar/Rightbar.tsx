import style from "./Rightbar.module.scss";
import { Search } from "../Search/Search";
export const Rightbar = () => {
    return <div className={style.leftbar}>
      <div className={style.item}>
        <Search/>
      </div>
    </div>;
};