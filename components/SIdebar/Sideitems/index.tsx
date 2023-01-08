import { SidebarItemProps } from "../../../types/sidebar";
import style from "./Sideitems.module.scss";
import clsx from "clsx";
import { ReactSvg }from "../../ReactSvg/ReactSvg";
import { useAppSelector } from "../../../redux/hook";

export const Sideitems = ({ title, path, icon, active, target,}: SidebarItemProps & { active?: boolean, target?: React.MouseEventHandler<HTMLDivElement>}) => {
    const thema = useAppSelector((state) => state.thema.themaDarkStatus);
    return <>
      <div onClick={target} className={clsx(style.sidebarItem, {
                [style.active]: active,
            })}>
                <ReactSvg pathFill={thema? 'black' : 'white'} {...icon}/>
                <h5 className={style.title}>{title}</h5> 
            </div>      
    </>;
};