import emailjs from "emailjs-com";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return emailjs.send(
    serviceId,
    templateId,
    {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    },
    userId
  );
};
