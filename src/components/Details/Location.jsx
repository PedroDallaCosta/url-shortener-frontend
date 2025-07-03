import Map from "@/components/Details/Map";

export default function Location({ countrys }) {
  return (
    <div className="w-full h-110 max-h-110 overflow-hidden rounded-2xl mt-5">
      <Map countrys={countrys}></Map>
    </div>
  )
}