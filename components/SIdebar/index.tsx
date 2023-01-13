import { SIDEBAR_ITEMS } from "./constants";
import { Sideitems } from "./Sideitems";
import style from "./Sidebar.module.scss";
import { ReactLogo } from "../ReactSvg/ReactLogo";
import { useAppSelector } from "../../redux/hook";
import React from "react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const thema = useAppSelector((state) => state.thema.themaDarkStatus);
  const router = useRouter();
  const [ target, setTarget ] = React.useState(`.${router.pathname}`);
  return <div className={style.container}>
    <div className={style.sidebar}>
    <ReactLogo blackThema={thema? "black":"white"}/>
      {SIDEBAR_ITEMS?.map((item,index) => <Sideitems target={() => setTarget(item.path)} active={item.path === target} key={index} {...item}/>)}
    </div>
  </div>
};



