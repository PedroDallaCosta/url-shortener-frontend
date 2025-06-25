export default function Help({ title, description, icon }) {
  const Icon = icon; // Corrigido aqui
  return (
    <div className="w-full flex items-center gap-3">
      <Icon className="w-9 h-9 rounded-[6px] text-white bg-[#293038] p-[11px]" />
      <div>
        <h3 className="text-xs font-medium">{title}</h3>
        <p className="text-[0.7em] text-gray-500 font-light">{description}</p>
      </div>
    </div>
  )
}