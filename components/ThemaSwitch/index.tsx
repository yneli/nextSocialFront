import style from "./ThemaSwitch.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { appDarkThema } from "../../redux/slices/themaSlice";

export const ThemaSwitch = () => {
    const dispatch = useAppDispatch();
    const darkThema = () => {
        dispatch(appDarkThema());
    };
    const thema = useAppSelector((state) => state.thema.themaDarkStatus);
    return (
         <div onClick={darkThema} className={style.svg}>
            <svg  width="25px" height="25px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill={thema? "black":"white"} d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z" ></path></g></svg>
    </div>
    );
};