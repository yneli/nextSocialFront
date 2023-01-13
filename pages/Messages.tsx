import { UserListBlock } from "../components/UserListBlock/UserListBlock";
import style from "./../styles/Messages.module.scss";
export default function Messages() {
    return <>
    <UserListBlock></UserListBlock>
    <div className={style.container}>
      <div className={style.header}></div>
  </div>
  </>
}