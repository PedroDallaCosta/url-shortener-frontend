export default function Item({ title, value }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-[#A3ABB5] font-regular text-[0.6em]">{title}</h1>
      <h1 className="text-white font-regular text-[0.6em]">{value.toLocaleString()}</h1>
    </div>
  )
}