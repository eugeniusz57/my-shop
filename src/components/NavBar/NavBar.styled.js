import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgb(19, 19, 19);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Nav = styled.nav `
  margin-right: 50px;
  display: flex;
  align-items: center;
`

export const Link = styled(NavLink) `
  text-decoration: none;
  color: white;
  margin-left: 20px;
  font-size: 25px;
`