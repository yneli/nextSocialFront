import style from "./UserItemsBlock.module.scss";
import clsx from "clsx";
export const UserItemsBlock = ({}) => {
  let active = true;
    return <>
      <div className={clsx(style.useritemsblock, {
        [style.active]: active,
      })}>
        <div className={style.items}>
          <div className={style.icons}>
            <img className={style.img} width={50} height={45} src="./assets/wave.jpg" alt="" />
          </div>
          <div className={style.name}>
            <div className={style.title}>yneli</div>
            <div className={style.heshTag}>@yneli <div className=""></div></div>
          </div>
        </div>
      </div>
    </>;
};