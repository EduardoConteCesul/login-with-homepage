import { Container, TextButton } from "./styles";

type LoginButtonProps = {
  onPress: () => void;
}

export function LoginButton({ onPress }: LoginButtonProps) {
  return(
    <Container onPress={onPress}>
      <TextButton>Login</TextButton>
    </Container>
  )
}