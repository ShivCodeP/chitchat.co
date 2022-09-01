import styled from "styled-components";
const primary = "#0096FF";
const secondary = "#3AB4F2";
const error = "#FF1E00";
type Props = {
  showNav: boolean;
};
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
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: lightblue;
  position: relative;
  transition: all 0.9s ease-in-out;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: 790px) {
      display: ${(props: Props) => (props.showNav === true ? "flex" : "none")};
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-right: 20px;
    }
  }

  @media (max-width: 790px) {
    justify-content: flex-end;
    padding: 0;
  }
`;
export const Hamburger = styled.div`
  padding: 2px;
  background-color: ${primary};
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  color: #fff;
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  @media (max-width: 790px) {
    display: flex;
  }
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
