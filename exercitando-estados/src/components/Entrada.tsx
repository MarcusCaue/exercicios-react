import { FormEvent } from "react"

interface EntradaProps {
  submitFunction: (event: FormEvent<HTMLFormElement>) => void,
  children: JSX.Element | JSX.Element[],
  buttonTitle: string
}

export default function Entrada(props: EntradaProps) {
  return (
    <>
      <section className="entrada text-gray-200" >
        <form className="flex flex-col gap-4" onSubmit={props.submitFunction}>
          { props.children }
          <button className="btn bg-cyan-500" type="submit"> {props.buttonTitle} </button>
        </form>
      </section>
      <hr className="my-5" />
    </>
  )
}