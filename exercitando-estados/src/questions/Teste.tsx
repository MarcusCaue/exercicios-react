import { SetStateAction, useRef, useState } from "react";

export default function Teste() {
  const [valorInput, setValorInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="" className="" onSubmit={(event) => {
      event.preventDefault()
      const value = inputRef.current?.value 
      console.log(value);
      setValorInput(value as SetStateAction<string>)
    }}>
      <input type="text" name="" id="" ref={inputRef} /> <br />

      <span>Valor do input: {valorInput}</span> <br />

      <button type="submit"> Mostrar valor </button>

    </form>
  )
}