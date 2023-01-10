import style from "./Search.module.scss";
import React from "react";
import clsx from "clsx";

export const Search = () => {
    const searchEl = React.useRef(null);
    const [ visible, setVisible ] = React.useState(false);
    const [ input, setInput ] = React.useState("");
    
    const handleOutSideClick = (e:any) => {
        const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(searchEl.current)) {
            setVisible(false);
        };
    };
    const toggleVisiblePopup = () => {
        setVisible(true);
      };
    React.useEffect(() => {
      document.body.addEventListener("click", handleOutSideClick)
    }, []);

    console.log(searchEl);
    return <div onClick={toggleVisiblePopup} ref={searchEl} className={clsx(style.search, {
      [style.active]: visible,
  })}>
      <div className={style.img}>
      <svg className={style.svg} width="17" height="17" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9961 1.00391C5.93281 1.00391 0.996101 5.93868 0.996094 12.002C0.996101 18.0653 5.93281 23.002 11.9961 23.002C14.6701 23.002 17.1225 22.0406 19.0312 20.4473L29.291 30.709C30.2359 31.6539 31.6539 30.2359 30.709 29.291L20.4473 19.0293C22.0358 17.1219 22.9941 14.6715 22.9941 12.002C22.9941 5.93868 18.0594 1.00391 11.9961 1.00391ZM11.9961 3.00391C16.9785 3.00394 20.9941 7.01955 20.9941 12.002C20.9941 16.9844 16.9785 21.002 11.9961 21.002C7.01369 21.002 2.9961 16.9844 2.99609 12.002C2.9961 7.01955 7.01369 3.00394 11.9961 3.00391Z" fill="black"/>
</svg>
        </div>
      <input onChange={(e) => setInput(e.target.value)} className={style.inputsearch} type="text" />
      {visible? <div className={input? style.animation: style.dropitems}>
        <div className={style.textitem}>{input? "Searching..." : "Try searching for people, topics, or keywords"}</div></div>:""}
    </div>;
};