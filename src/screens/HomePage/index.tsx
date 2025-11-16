import { Container, WelcomeText } from "./styles";

type HomePageProps = {
  userName: string;
}

export function HomePage({ userName }: HomePageProps) {
  return (
    <Container>
      <WelcomeText>Seja bem vindo, {userName}!</WelcomeText>
    </Container>
  )
}