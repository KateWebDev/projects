import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import styled from "styled-components";

const Main = styled.main`
  background: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100svh;
  height: 100%;
`;

const Container = styled.div`
  max-width: 80svw;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (min-width: 768px) {
    max-width: 120rem;
    row-gap: 3rem;
  }
`;

export default function AppLayout() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Wrapper>
  );
}
