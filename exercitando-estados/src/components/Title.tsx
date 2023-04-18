interface TitleProps {
  children: string
}

export default function Title({children} : TitleProps) {
  return (
    <>
      <h1 className="title-1"> {children} </h1>
      <hr className="my-5" />
    </>
  )
}