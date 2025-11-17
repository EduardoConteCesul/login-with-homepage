import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '../../components/Card';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
export function LoginPage(){

  const navigation = useNavigation();

  const storeData = async (value: string) => {
  try {
    console.log('Salvando usuário ', value);
    await AsyncStorage.setItem('my-key', value);
    navigation.navigate('Home' as never);
  } catch (e) {
    console.error('Erro ao salvar usuário ', e);
  }
};

  return(
    <Container>     
      <Card onLogin={(value) => storeData(value)}/>
    </Container>
  )
}