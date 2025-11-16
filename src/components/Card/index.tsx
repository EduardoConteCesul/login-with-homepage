import { InputText } from "../InputText";
import { LoginButton } from "../LoginButton";
import { Container, Title } from "./styles";

export function Card(){
  return(
    <Container>
      <Title>Faça seu login!</Title>
      <InputText placeholder="Username" />
      <LoginButton />
    </Container>
  )
}