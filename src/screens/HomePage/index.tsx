import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, WelcomeText } from "./styles";
import { useEffect, useState } from "react";


export function HomePage() {

  const [value, setValue] = useState<string>('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        setValue(value);
      }
    } catch (e) {
      console.error('Erro ao buscar usuário ', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <WelcomeText>Seja bem vindo, {value}!</WelcomeText>
    </Container>
  )
}