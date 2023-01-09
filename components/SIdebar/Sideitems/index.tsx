import { SidebarItemProps } from "../../../types/sidebar";
import style from "./Sideitems.module.scss";
import clsx from "clsx";
import { ReactSvg }from "../../ReactSvg/ReactSvg";
import { useAppSelector } from "../../../redux/hook";
import Link from "next/link";

export const Sideitems = ({ title, path, icon, active, target,}: SidebarItemProps & { active?: boolean, target?: React.MouseEventHandler<HTMLDivElement>}) => {
    const thema = useAppSelector((state) => state.thema.themaDarkStatus);
    
    return <>
      <Link  href={path}>
      <div onClick={target} className={clsx(style.sidebarItem, {
                [style.active]: active,
            })}>
                <ReactSvg pathFill={thema? 'black' : 'white'} {...icon}/>
                <h5 className={style.title}>{title}</h5> 
                <div className={style.title}></div>
            </div> 
            </Link>  
    </>;
};