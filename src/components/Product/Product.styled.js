import styled from "styled-components";

export const ProductItem = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 400px;
  }

  &:hover,
  &:focus {
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  text-align: center;
`;

export const AddToCartBttn = styled.button`
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 15px;

  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
    cursor: pointer;
  }
`;
