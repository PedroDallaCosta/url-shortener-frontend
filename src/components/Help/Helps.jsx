import Title from "@/components/Title"
import { description } from "../Details/Graph"
import SubTitle from "../SubTitle"
import Help from "./Help"
import { Link, ChartNoAxesCombined, CircleUserRound, Lock, Headset, CreditCard, ShieldQuestionMark } from 'lucide-react';

const Infos = [
  {
    title: "Getting Started",
    helps: [
      {
        title: "Creating and Managing Links",
        description: "Learn how to create and manage your shortened links.",
        icon: Link
      },
      {
        title: "Types of Shortened Links",
        description: "Understand the different types of links you can create.",
        icon: Link
      },
      {
        title: "Tracking Link Performance",
        description: "Discover how to track clicks and other analytics for your links.",
        icon: ChartNoAxesCombined
      }
    ]
  },

  {
    title: "Account Management",
    helps: [
      {
        title: "Managing Your Account",
        description: "Find out how to update your account information and settings.",
        icon: CircleUserRound
      },
      {
        title: "Password Reset",
        description: "Learn how to reset your password if you've forgotten it.",
        icon: Lock
      },
      {
        title: "Subscription Plans",
        description: "Understand how to upgrade or downgrade your subscription plan.",
        icon: CreditCard
      }
    ]
  },

  {
    title: "Troubleshooting",
    helps: [
      {
        title: "Common Issues and Solutions",
        description: "Get help with common issues you might encounter.",
        icon: ShieldQuestionMark
      },
      {
        title: "Contact Support",
        description: "Learn how to contact our support team for assistance.",
        icon: Headset
      }
    ]
  }
]

export default function Helps() {
  return (
    <div className="mt-7">
      {Infos && Infos.map(({ title, helps }) => (
        <div className="mt-4">
          <Title className="text-base">{title}</Title>

          <div className="w-full flex flex-col gap-3 mt-4">
            {helps && helps.map(({ title, description, icon }) => (
              <Help title={title} description={description} icon={icon}></Help>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}