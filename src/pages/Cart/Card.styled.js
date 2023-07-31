import styled from "styled-components";

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Checkout = styled.div`
  & button {
    width: 150px;
    height: 50px;
    background-color: rgb(19, 19, 19);
    color: white;
    border: none;
    border-radius: 8px;
    margin: 10px;
    cursor: pointer;
  }
`;
