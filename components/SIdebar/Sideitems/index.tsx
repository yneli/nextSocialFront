import { SidebarItemProps } from "../../../types/sidebar";
import style from "./Sideitems.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { ReactSvg }from "../../ReactSvg/ReactSvg";

export const Sideitems = ({ title, path, icon, active, target,}: SidebarItemProps & { active?: boolean, target?: React.MouseEventHandler<HTMLDivElement>}) => {

    return <>
      <div onClick={target} className={clsx(style.sidebarItem, {
                [style.active]: active,
            })}>
                <ReactSvg pathFill={"black"} {...icon}/>
                <h5 className={style.title}>{title}</h5> 
            </div>      
    </>;
};