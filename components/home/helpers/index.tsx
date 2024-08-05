import {
  BookText,
  CircleCheckBig,
  CircleSlash,
  MessageCircleHeart,
  Proportions,
  ShieldCheck,
} from "lucide-react";

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

export const aboutUs = {
  ourStory: {
    title: "Our Story",
    description:
      "Nobounce Mail was born out of a simple idea: to create a reliable solution for businesses struggling with invalid email addresses and high bounce rates. With our years of experience in the digital marketing industry, we recognized the need for an accurate and efficient email verification tool. Today, we serve clients across various industries, helping them achieve better results with their email marketing campaigns.",
    icon: <BookText />,
  },
  ourVision: {
    title: "Our Vision",
    description:
      "Our vision is to become the top email verification service provider, known for our accuracy, efficiency, and exceptional customer support. Our aim is to help businesses of all sizes enhance their email marketing strategies and achieve their goals.",
    icon: <CircleSlash />,
  },
  ourValues: {
    title: "Our Values",
    description: {
      Accuracy:
        "We are committed to providing the most precise email validation services, ensuring our client's email lists are clean and up-to-date.",
      "Customer Satisfaction":
        "Our clients and their needs are at the heart of everything we do. We ourselves on offering outstanding support and building long-term relationships.",
    },
    icon: <MessageCircleHeart />,
  },
};
