import styled from "styled-components";
const primary = "#0096FF";
const secondary = "#3AB4F2";
const error = "#FF1E00";
export const HomeBox = styled.div`
  width: 90vw;
  height: 90vh;
  margin: auto;
  border-radius: 10px;
  border: 4px solid lightblue;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 5px;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 10px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Badge = styled.sup`
  color: ${error};
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  border: none;
`;
