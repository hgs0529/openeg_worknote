import { useQuery } from "react-query";
import styled from "styled-components";
import { IRegiUserResult, regiUser } from "../api";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  width: 300px;
`;

const Input = styled.input`
  height: 50px;
  width: 300px;
  padding: 0 20px;
  font-size: 18px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

function Worknote() {
  
  
  return (
    <Wrapper>
      <Title>출퇴근 관리</Title>
      <Input readOnly />
    </Wrapper>
  );
}

export default Worknote;
