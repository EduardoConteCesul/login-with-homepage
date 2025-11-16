import { Teste } from "./styles";

type PropsInputText = {
  placeholder: string;
}

export function InputText({ placeholder }: PropsInputText) {
  return(
    <Teste placeholder={placeholder} />
  )
}