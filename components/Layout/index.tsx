import style from "./Layout.module.scss";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../SIdebar";
import { Container } from "@mui/material";
export const Layout = ({ children }: { children?: ReactNode, header?: ReactNode }) => {
  return <>
  <Container maxWidth="lg">
    <Header/>
    <div className={style.container}>
        <Sidebar/>
        {children}
    </div>
    </Container>
    </>;
};