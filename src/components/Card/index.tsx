import { useEffect, useState } from "react";
import { InputText } from "../InputText";
import { LoginButton } from "../LoginButton";
import { Container, Title } from "./styles";

type CardProps = {
  onLogin: (username: string) => void;
}

export function Card({ onLogin }: CardProps) {

  const [value, setValue] = useState<string>('');

  return(
    <Container>
      <Title>Faça seu login!</Title>
      <InputText placeholder="Username" onChangeText={(value) => setValue(value)}/>
      <LoginButton onPress={() => onLogin(value)}/>
    </Container>
  )
}