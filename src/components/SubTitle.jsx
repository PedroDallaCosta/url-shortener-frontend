export default function SubTitle(props) {
  return (
    <h2 className={`font-light text-[#9CABBA] text-xs mt-1 ${props.className}`}>
      {props.children}
    </h2>
  )
}