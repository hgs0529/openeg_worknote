import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
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
