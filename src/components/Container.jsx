export default function Container(props) {
  return (<>
    <div className="flex-grow w-full h-full">
      {props.children}
    </div>
  </>)
}