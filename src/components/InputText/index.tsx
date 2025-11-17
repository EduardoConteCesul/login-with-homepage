import { Teste } from "./styles";

type PropsInputText = {
  placeholder: string;
  onChangeText: (text: string) => void;
}

export function InputText({ placeholder, onChangeText }: PropsInputText) {
  return(
    <Teste placeholder={placeholder} onChangeText={onChangeText} />
  )
}