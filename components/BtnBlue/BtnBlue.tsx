import { ReactNode } from "react";
import style from "./BtnBlue.module.scss";
export const BtnBlue = ({children}: {children?: ReactNode}) => {
    return <>
      <button className={style.btnblue}>
        {children}
      </button>
    </>;
};