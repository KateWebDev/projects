import styled, { css } from "styled-components";

const TYPE_HORIZONTAL = "horizontal";
const TYPE_VERTICAL = "vertical";

export const Row = styled.div`
  display: flex;
  gap: 1.5rem 1rem;

  ${(props) =>
    props.type === TYPE_HORIZONTAL &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === TYPE_VERTICAL &&
    css`
      flex-direction: column;
    `}
`;
