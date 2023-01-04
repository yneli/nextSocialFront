import { SIDEBAR_ITEMS } from "./constants";
import { Sideitems } from "./Sideitems";
import style from "./Sidebar.module.scss";

export const Sidebar = () => {
  return <div className={style.container}>
    <div className={style.sidebar}>
      {SIDEBAR_ITEMS?.map((item,index) => <Sideitems key={index} {...item}/>)}
    </div>
  </div>
};