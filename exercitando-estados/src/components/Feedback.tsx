interface FeedbackProps {
  show: boolean,
  children: JSX.Element[] | JSX.Element,
  title: string 
}

export default function Feedback(props: FeedbackProps) {
  return (
    <section className="saida" style={{ display: props.show ? "block" : "none" }}>
      <h2 className="title-2"> { props.title } </h2>
      <hr className="my-5" />
      { props.children }
    </section>
  )
}