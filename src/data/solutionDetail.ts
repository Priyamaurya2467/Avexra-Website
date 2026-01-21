import { button, desc, label } from "framer-motion/client";
import { Heading, icons } from "lucide-react";

export const bestForData = {
    heading : "Best For",
    subheading : "Tailored solution for every department.",
    items : [
        {
            slug: "customer-support",
            title: "Customer Support",
            description:
                "Deflect up to 70% of routine tickets and let human agents focus on complex issues.",
            icon: "support",
        },
        {
            slug: "hr-internals-ops",
            title: "HR, Internals & Ops",
            description:
                "Automate employee onboarding, benefits inquiries, and IT helpdesk requests instatly.",
            icon: "hr",
        },
        {
            slug: "sales-automation",
            title: "Sales Automation",
            description:
                "Qualify leads 24/7, schedule demos, and capture contact details before users leave your site.",
            icon: "sales",
        },
        {
            slug: "user-onboarding",
            title: "User Onboarding",
            description:
                "Guide new users through your platform with interative, step-by-step walkthroughs.",
            icon: "onboarding",
        },
    ],
};
export const ctaData = {
    heading: "Ready to autoomate your conversations?",
    description:
        "Join 500+ companies using Avexra AI to deliver faster  support and drive more sales.",
    buttons: [
        {
            label: "Start Free Trial",
            variant: "primary" ,

        },
        {
            label: "Talk to Sales",
            variant: "secondary" ,
        },
    ],
};