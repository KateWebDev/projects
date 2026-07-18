import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
`;

export default function Header() {
  return <StyledHeader>This is header</StyledHeader>;
}
