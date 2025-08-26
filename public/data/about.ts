export const aboutMe = {
  description: [
    "Hi! I'm a passionate MERN stack developer with a fresh perspective and a strong foundation in Computer Science & Engineering from Madan Mohan Malviya University Of Technology.",
    "While I enjoy working across the full stack, React is where I truly thrive—crafting dynamic, user-friendly interfaces and bringing ideas to life on the web.",
    "As a fresher, I’ve built several projects using the MERN stack, each one helping me grow my skills and creativity. I’m always eager to learn, experiment, and collaborate on innovative solutions.",
    "I believe in continuous learning, tackling challenges head-on, and building web experiences that make a difference. Let’s create something awesome together!",
  ],
  cvPath: "/assets/CV.pdf", // Upload your own CV in /public/assets as CV.pdf
  cvFileNameAfterDownload: "Akshay_Pratap_singh CV.pdf", // This is what the name of the file is going to be when downloaded
};

export const technicalSkills: Record<string, string[]> = {
  // You can rename the type of skills, it's dynamically rendered. eg: You can change "Programming Languages" -> to just "Languages"
  "Programming Languages": ["JavaScript", "TypeScript", "C", "C++", "Java"],
  "Frontend Development": [
    "React",
    "React Native",
    "HTML5",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Redux Toolkit",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "SQL",
    "MySQL",
  ],
  // "UI/UX Design": [
  //   "Figma",
  //   "Adobe Illustrator",
  //   "Adobe Photoshop",
  //   "Miro",
  //   "MockFlow",
  // ],
  "Tools & Technologies": ["Git", "GitHub", "Postman", "Netlify", "Render"],
  "Soft Skills": ["Presentation", "Communication", "Leadership", "Mentorship"],
};
