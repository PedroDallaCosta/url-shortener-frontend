export default function Title(props) {
  return (
    <h1 className={`text-white text-3xl font-medium ${props.className}`}>
      {props.children}
    </h1>
  )
}