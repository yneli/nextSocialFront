import style from "./Rightbar.module.scss";
import { Search } from "../Search/Search";
import { Loading } from "../Loading/Loading";
export const Rightbar = () => {
    return <div className={style.leftbar}>
      <div className={style.item}>
        <Search/>
        <div className={style.content}>
          <Loading/>
        </div>
      </div>
    </div>;
};