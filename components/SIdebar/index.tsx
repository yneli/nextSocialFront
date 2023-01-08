import { SIDEBAR_ITEMS } from "./constants";
import { Sideitems } from "./Sideitems";
import style from "./Sidebar.module.scss";
import { ReactLogo } from "../ReactSvg/ReactLogo";

export const Sidebar = () => {
  return <div className={style.container}>
    <div className={style.sidebar}>
    <ReactLogo/>
      {SIDEBAR_ITEMS?.map((item,index) => <Sideitems key={index} {...item}/>)}
    </div>
  </div>
};



