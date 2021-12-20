import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { IForm, IRegiUserResult, regiUser } from "../api";
import { useEffect, useState } from "react";



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
  const navigate = useNavigate();
  let output = localStorage.getItem("userid");
  if (output) {
    navigate(`/worknote`);
  }
  const { register, handleSubmit } = useForm<IForm>();
  const [username, setUsername] = useState("");
  const { data: userData, isLoading, refetch } = useQuery(
    "regi",
    () => regiUser(username),
    { enabled: false }
  );
  const onValid = (data: IForm) => {
    setUsername(data.username);
    if (userData) {
      localStorage.setItem("userid", userData);
      navigate(`/worknote`);
    }
  };
  useEffect(() => {
    if (!output) {
      refetch();
    }
  }, [username]);
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
