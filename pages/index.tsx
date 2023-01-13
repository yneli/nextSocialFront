import style from "../styles/Home.module.scss";
import Avatar from '@mui/material/Avatar';
import { Loading } from "../components/Loading/Loading";
import { BtnBlue } from "../components/BtnBlue/BtnBlue";
import { Editor } from "../components/Editor/Editor";
import { Rightbar } from "../components/Rightbar/Rightbar";

export default function Home() {
  return (<>
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.title}>Home</h3>
        <div className={style.userItems}>
          <div className={style.editor}>
          <div className={style.userAvata}>
            <Avatar alt="Travis Howard" src="./assets/wave.jpg" />
          </div>
          <div className={style.whIdit}>
          <Editor/>
          </div>
          </div>
        </div>
        <div className={style.btn}>
          <BtnBlue>chirp</BtnBlue>
        </div>
      </div>
      <div className={style.content}>
        <Loading/>
      </div>
    </div>
    <Rightbar/>
    </>
  );
};
