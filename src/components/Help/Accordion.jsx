import Title from "@/components/Title";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Acoordions = [
  {
    title: "How do I shorten a URL?",
    description: "To shorten a URL, simply paste the long URL into the input field on the homepage and click the 'Shorten' button. Your shortened link will be generated instantly."
  },
  {
    title: "Can I customize my shortened links?",
    description: "Yes, you can customize the back-half of your shortened URL to make it more memorable or relevant. Just click on the 'Customize' option after generating your short link and enter your preferred alias."
  },
  {
    title: "What analytics are available for my links?",
    description: "Our platform provides detailed analytics for each shortened URL, including the number of clicks, geographic location of users, referral sources, and device types. These insights help you track performance and optimize your link sharing."
  },
]

export default function Accordions() {
  return (
    <div className="mt-5 pb-10">
      <Title className="text-base">Frequently Asked Questions</Title>

      <Accordion
        type="single"
        collapsible
        className="w-full h-"
      >
        {Acoordions && Acoordions.map(({ title, description }, index) => (
          <AccordionItem value={`item-${index}`} className="mb-4" key={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}