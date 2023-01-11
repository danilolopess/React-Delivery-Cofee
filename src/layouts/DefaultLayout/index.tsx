import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "../../styles/global";

export function DefaultLayout() {
  return(
    <>
    <Container>
      <Header />
    </Container>
    <Outlet />
    </>
  )
}