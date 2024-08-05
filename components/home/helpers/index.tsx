import { CircleCheckBig, Proportions, ShieldCheck } from "lucide-react";

export const whatWeDo = [
  {
    id: 0,
    title: "Unmatched Accuracy",
    description:
      "Our algorithms provide precise email validation, pruning out invalid addresses, spam traps, and temporary emails before they ruin your email campaigns.",
    icon: <CircleCheckBig />,
  },
  {
    id: 1,
    title: "Bulk verification",
    description:
      "Simply upload your email lists and let our bulk email verifier handle the rest, processing thousands of addresses in a minute",
    icon: <ShieldCheck />,
  },
  {
    id: 2,
    title: "Reports",
    description:
      "Receive comprehensive reports that give you a clear view of your email list, helping you make data-driven decisions.",
    icon: <Proportions />,
  },
];

export const howItWorks = [
  {
    id: 0,
    description:
      "Upload your email list for analysis and mailbox verification using our email verification tool.",
  },
  {
    id: 1,
    description:
      "We cover all email verification errors starting from syntax errors to domain issues and mailbox existence.",
  },
  {
    id: 2,
    description:
      "Nobunce Mail ensures your list is clean and ready for successful email marketing.",
  },
];

export const whyChooseUs = [
  {
    id: 0,
    title: "Slash Bounce Rates",
    description:
      "Eliminating invalid addresses has a positive effect on bounce rates, improving your reputation and deliverability.",
    icon: "slash-bounce-rates",
  },
  {
    id: 1,
    title: "Maximize Budgets",
    description:
      "Nobounce Mail helps you stop wasting resources on emails that never reach their destination. By investing in a valid address, you get the most out of your marketing budget.",
    icon: "maximize-budgets",
  },
  {
    id: 2,
    title: "Boost Engagement",
    description:
      "With a verified email list, your messages stand a chance of getting to real people, leading to a higher click-through rate.",
    icon: "boost-engagement",
  },
];

export const pricingPlans = [
  {
    id: 0,
    name: "Free",
    price: "$0",
    description:
      "Ideal for individuals or small businesses testing our service. Validate up to 100 emails per month with standard accuracy.",
    features: [
      "Basic email validation",
      "Limited to 100 email verifications per month",
      "Standard accuracy",
      "Basic reports",
      "Email support",
    ],
  },
  {
    id: 1,
    name: "Basic",
    price: "$29",
    description:
      "Perfect for growing businesses. Validate up to 10,000 emails per month with high accuracy and priority support.",
    features: [
      "Advanced email validation",
      "Up to 10,000 email verifications per month",
      "High accuracy",
      "Detailed reports",
      "Priority email support",
      "Bulk verification",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: "$99",
    description:
      "Best for large enterprises with extensive email marketing needs. Validate up to 100,000 emails per month with unmatched accuracy and comprehensive support.",
    features: [
      "Comprehensive email validation",
      "Up to 100,000 email verifications per month",
      "Unmatched accuracy",
      "Comprehensive reports",
      "Priority email and phone support",
      "Bulk verification",
      "API access",
      "Dedicated account manager",
    ],
  },
];

export default pricingPlans;
