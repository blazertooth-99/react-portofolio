import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `An enthusiastic person who likes to learn new things, especially in the field of technology. Has approximately
                              3 years of working experience. Have worked with various roles such as DevOps Engineer, Fullstack
                              Developer, Freelancer, Design / Software Quality Assurance`;

export const ABOUT_TEXT = `Gatau males, Gatau males, Gatau males, Gatau males, Gatau males, Gatau males, Gatau males`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Design Quality Assurance & Software Quality Assurance",
    company: "PT. Hartono Istana Teknologi (Polytron)",
    description: `Lead the team to carry out product performance and design testing. verification and validation according to UAT for website testing.`,
    technologies: ["Selenium", "Postman", "Manual Testing", "Automation Testing"],
  },
  {
    year: "2021 - 2022",
    role: "PHP Fullstack",
    company: "Square Gate One",
    description: `Being a fullstack programmer, designing the frontend of the bank payment display, adding features to the payment gateway on the backend and updating and migrating data in the database.`,
    technologies: ["HTML", "CSS", "Zend Framework", "mySQL","Oracle 11g","Git","Ubuntu"],
  },
  {
    year: "2021",
    role: "PHP & Android Programmer",
    company: "Koperasi Indora",
    description: `menjadi fullstack PHP dan Android, mengembangkan fitur pembayaran, membuat UI untuk marketplace penjualan sembako.`,
    technologies: ["PHP", "Code Igniter", "Android Native", "MySQL","Navicat"],
  },
  {
    year: "2019 - 2020",
    role: "System Engineer, Intern",
    company: "PT. Multipolar Technology, Tbk",
    description: `Job description, checking bugs in the code that will be updated to the production server. Prepare the server and software that will be used to migrate the database and update customer data using oracle 11g.`,
    technologies: ["Docker", "Redhat 7", "Angular", "Java Springboot"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Indonesia, Jawa Tengah ",
  phoneNo: "+62858-5181-6241 ",
  email: "christiansatrio30@gmail.com",
};
