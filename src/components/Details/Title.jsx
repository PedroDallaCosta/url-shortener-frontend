export default function Title({ title, className }){
  return (<h1 className={`text-white text-1xl font-medium ${className}`}>{title}</h1>)
}