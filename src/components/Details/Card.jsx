import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardC({ title, description }) {
  return (
    <>
      <Card className="w-full max-w-sm bg-transparent border border-[#3B4A54] shadow-none overflow-hidden">
        <CardHeader>
          <CardTitle className="text-white font-normal text-[0.9rem] sm:text-[1rem] md:text-[1.1rem]">
            {title.length > 20 ? title.slice(0, 17) + "..." : title}
          </CardTitle>

          <CardDescription className="text-white font-bold text-[1.2rem] sm:text-[1.45rem] md:text-[1.6rem] truncate">
            {!description && description != 0 ? "" : description.toLocaleString()}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}