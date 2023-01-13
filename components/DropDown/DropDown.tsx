import { ReactNode } from "react";
import style from "./DropDown.module.scss";
export const DropDown = ({ children, items }:{ children?: ReactNode, items?: any}) => {
    return (
      <div className={style.container}>
        {children}
      </div>);
};

