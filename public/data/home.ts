import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  // myImage: "/assets/my_image.webp",
  // myImage: "/assets/img.jpg",
  myImage: "/assets/img.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "akshay8081singh@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Gorakhpur, UttarPradesh, Inida",
      Link: "https://www.google.com/maps/search/Explore+Gorakhpur+City,+Gorakhpur,+India/@26.7637151,83.4039116,20383m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+91 8081360679",
      Link: "tel:+918081360679",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "MMMUT Gorakhpur",
      Link: "https://mmmut.ac.in/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Computer Science & Engineering",
      Link: "https://www.mmmut.ac.in/CS_About",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/se-akshay",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/akshay-pratap-singh-243580252/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/akshay.pratap.116",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/akshu_01___/",
    },
  ],
};
