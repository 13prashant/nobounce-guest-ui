import { BookText, CircleSlash, MessageCircleHeart } from "lucide-react";

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
