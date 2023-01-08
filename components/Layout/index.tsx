import style from "./Layout.module.scss";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../SIdebar";
import { Container } from "@mui/material";
import { Leftbar } from "../Leftbar/Leftbar";
import { ThemaSwitch } from "../ThemaSwitch";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { whatIsThema } from "../../redux/slices/themaSlice";
export const Layout = ({ children }: { children?: ReactNode, header?: ReactNode }) => {
  
  const dispatch = useAppDispatch();
  const thema = useAppSelector((state) => state.thema.themaDarkStatus);

  React.useEffect(() => {
    dispatch(whatIsThema());
  }, []);

  if(thema === true){
    document.body.style.background = 'white';
    document.body.style.color = 'black'
  }if(thema === false) {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
  };
  
  return <>
  <Container maxWidth="lg">
    <Header/>
    <div className={style.container}>
      <Sidebar/>
      {children}
      <Leftbar/>
      <ThemaSwitch/>
    </div>
    </Container>
    </>;
};