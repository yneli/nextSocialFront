import style from "./UserListBlock.module.scss";
export const UserListBlock = () => {
    return <>
      <div className={style.userlistblock}>
        <div className={style.title}><h3>Messages</h3>
        <div className={style.icons}></div>
        </div>
        <div className={style.search}>
          <svg className={style.svg} width="17" height="17" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill="grey" d="M11.9961 1.00391C5.93281 1.00391 0.996101 5.93868 0.996094 12.002C0.996101 18.0653 5.93281 23.002 11.9961 23.002C14.6701 23.002 17.1225 22.0406 19.0312 20.4473L29.291 30.709C30.2359 31.6539 31.6539 30.2359 30.709 29.291L20.4473 19.0293C22.0358 17.1219 22.9941 14.6715 22.9941 12.002C22.9941 5.93868 18.0594 1.00391 11.9961 1.00391ZM11.9961 3.00391C16.9785 3.00394 20.9941 7.01955 20.9941 12.002C20.9941 16.9844 16.9785 21.002 11.9961 21.002C7.01369 21.002 2.9961 16.9844 2.99609 12.002C2.9961 7.01955 7.01369 3.00394 11.9961 3.00391Z" />
          </svg>
            <input placeholder="Try searching for people, groups" className={style.input} type="text" />
        </div>
        <div className={style.items}></div>
      </div>
    </>
}