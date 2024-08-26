import MyKitchen from "../assets/projects/MyKitchen.jpg"
import Koperasi from "../assets/projects/logo-Koperasi.png"
import LogoBabel from "../assets/projects/logobabel.png"
import CSLogo from "../assets/projects/CSLogo.png"

export const HERO_CONTENT = `An enthusiastic person who likes to learn new things, especially in the field of technology. Has approximately
                              3 years of working experience. Have worked with various roles such as DevOps Engineer, Fullstack
                              Developer, Freelancer, Design / Software Quality Assurance`;

export const ABOUT_TEXT = `Hello, my name is Christian Satrio, usually called Satrio. 
                          I graduated from Satya Wacana Christian University, Faculty of Informatics Engineering with a concentration in Application Developer, graduated in 2021. 
                          I love learning about Javascript frameworks, such as React Js, Next Js, Node Js and Express Js and am exploring UI/UX.
                          I have 3 years of experience with many roles that I have worked on. that's all the introduction from me. Thank you`;

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
    title: "My Kitchen Design",
    image: MyKitchen,
    link: "https://www.figma.com/proto/58fGb202in1aAPbIEqaKPY/Untitled?t=McedLYR26235VIee-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2",
    description:
      "UI / UX design using figma, for the My Kitchen application, the use of the application as a guide to how to cook and there are many catalog recipes available.",
    technologies: ["Wireframe", "Figma", "UI Design"],
  },
  {
    title: "Koperasi Indora Web & Mobile",
    image: Koperasi,
    link: "https://github.com/blazertooth-99/PHP-Aplikasi-koperasi.git",
    description:
      "Koperasi Indora website and android application, used for payments such as food purchases, PDAM payments, electricity tokens, credit and others.",
    technologies: ["HTML", "CSS", "PHP", "Code Igniter", "MySQL", "Android Native"],
  },
  {
    title: "Babel Leathercraft Website",
    image: LogoBabel,
    link: "https://github.com/blazertooth-99/angular-babel-product-catalogue.git",
    description:
      "Babel Leathercraft website, used to catalog display products sold by babel brands.",
    technologies: ["Angular 7", "CSS", "Bootstrap"],
  },
  {
    title: "React Portofolio",
    image: CSLogo,
    link: "https://github.com/blazertooth-99/react-portofolio.git",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React Vite", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Indonesia, Jawa Tengah ",
  phoneNo: "+62858-5181-6241 ",
  email: "christiansatrio30@gmail.com",
};
