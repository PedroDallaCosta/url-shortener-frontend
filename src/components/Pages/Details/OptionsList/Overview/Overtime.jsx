import CardC from "@/components/pages/Details/Card"
import Title from "@/components/pages/Details/OptionsList/title"
import Items from "./Items"

export default function Overview({ clicks, uniqueClicks, topReferrers, url, createdAt, passwordProtected, expirationDate, path }) {
  return (
    <div className="w-full mt-5 h-full">
      <div className="w-full flex justify-between items-center gap-5">
        <CardC title="Total Clicks" description={clicks}></CardC>
        <CardC title="Unique Clicks" description={uniqueClicks}></CardC>
        <CardC title="Top Referrer" description={topReferrers}></CardC>
      </div>

      <Title title={"Link details"} className={"mt-7"}></Title>
      <Items url={url} createdAt={createdAt} passwordProtected={passwordProtected} expirationDate={expirationDate} path={path} />
    </div>
  )
}