interface navType {
  title: string;
  link: string;
}
interface studentType {
  name: string;
  education: string;
  location: string;
  year: number;
  email: string;
  img: string;
}
interface TestimonialsType {
  name: string;
  title: string;
  description: string;
  image: string;
}

export const navLinks: navType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Admission",
    link: "/admission",
  },
  {
    title: "Visa",
    link: "/visa",
  },
  {
    title: "Grading",
    link: "/grading",
  },
  {
    title: "Finances & Scholarships",
    link: "/finances-scholarships",
  },
  {
    title: "Uni-Assist",
    link: "/uni-assist",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Students in germany",
    link: "/students-in-germany",
  },
  {
    title: "Who we Are",
    link: "/who-we-are",
  },
];

export const studentsData: studentType[] = [
  {
    name: "Mr. Muhamad Ahsan Mahmood",
    education: "Student of MS in International Economics & Management",
    location: "University of Paderborn in Germany",
    year: 2024,
    email: "",
    img: "https://images.unsplash.com/photo-1625486792898-a903f4770410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ms. Sara Khalid",
    education: "MS in Data Science",
    location: "University of Munich, Germany",
    year: 2024,
    email: "",
    img: "https://images.unsplash.com/photo-1700680056842-20d9acc36e91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Dr. Imran Naveed",
    education: "PhD in Machine Learning",
    location: "Germany",
    year: 2025,
    email: "",
    img: "https://images.unsplash.com/photo-1659353888640-91aa7c25fa29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mr. Zohaib Khan",
    education: "Student of Software Engineering",
    location: "RWTH Aachen University, Germany",
    year: 2025,
    email: "",
    img: "https://images.unsplash.com/photo-1646414771574-96d2db3a7c8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const testimonials: TestimonialsType[] = [
  {
    name: "Mr. Muhamad Ahsan Mahmood",
    title: "Student of MS in International Economics & Management",
    description:
      "After BBA, he got admission in MS in International Economics & Management from University of Paderborn, Germany",
    image: "https://images.unsplash.com/photo-1625486792898-a903f4770410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Ms. Sara Khalid",
    title: "MS in Data Science",
    description:
      "After her BSCS, she got admission in Data Science from Technical University of Munich, Germany",
    image: "https://images.unsplash.com/photo-1700680056842-20d9acc36e91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mr. Zohaib Khan",
    title: "Student of Software Engineering",
    description:
      "Currently pursuing Software Engineering at RWTH Aachen University, Germany",
    image: "https://images.unsplash.com/photo-1646414771574-96d2db3a7c8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
