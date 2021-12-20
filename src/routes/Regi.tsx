import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { IRegiUserResult, regiUser } from "../api";

interface IForm {
  username: string;
}

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

function Regi() {
  let output = localStorage.getItem("userid");
  let localData = JSON.parse(output as any);
  const navigate = useNavigate();
  if (localData) {
    navigate(`/worknote/${localData}`);
  }
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/worknote/${data}`);
  };
  return (
    <Wrapper>
      <Title>사원명 등록</Title>
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("username", { required: true })}
          placeholder="사원명을 입력해주세요"
        />
      </form>
    </Wrapper>
  );
}

export default Regi;
