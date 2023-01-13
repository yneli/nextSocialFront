import style from "./Editor.module.scss";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import React from "react";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export const Editor = () => {
    const [ input, setInput ] = React.useState("");
    return <>
       <div className={style.editor}>
        <input className={style.inputeditor} placeholder="What`s happening?" type="text" name="" id="" />
        <div className={style.items}>
          <div className={style.icons}>
            <AddReactionIcon></AddReactionIcon>
            <ImageIcon></ImageIcon>
            <GifBoxIcon></GifBoxIcon>
            <AddLocationAltIcon></AddLocationAltIcon></div>
          <div className={style.btn}>
          </div>
        </div>
      </div>
    </>;
};