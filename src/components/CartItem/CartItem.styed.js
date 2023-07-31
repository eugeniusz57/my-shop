import styled from "styled-components";

export const Item = styled.div`
  width: 700px;
  height: 250px;
  display: flex;

  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;

  & img {
    width: 200px;
  }
`;

export const Description = styled.div`
  width: 100%;
  font-size: 30px;
`;

export const CountHandler = styled.div`
  & input {
    width: 40px;
    text-align: center;
    font-weight: bolder;
  }
`;
