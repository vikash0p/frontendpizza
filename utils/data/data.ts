import {
  chooseProps,
  continentalProps,
  sliderProps,
  navLinksInterface,
} from "@/utils/types/interface";

export const slider: sliderProps[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    tag: "Classic Delight",
    description:"Experience the authentic taste of Italy with our Margherita pizza topped with fresh basil, mozzarella, and tomato sauce.",
    img: "/S1.png",
  },
  {
    id: 2,
    name: "BBQ Olive Pizza",
    tag: "Savor the Flavor",
    description: "Enjoy the perfect blend of smoky BBQ chicken, red onions, and melted cheese on a crispy crust.",
    img: "/slider-2.png",
  },
];

export const choose: chooseProps[] = [
  {
    id: 1,
    name: "Choose Your Item",
    desc: "crop establish whispered led dollar shop newspaper somebody opportunity warn tide body flame title phrase ",
    img: "/choose-item.png",
  },
  {
    id: 2,
    name: "Add Home Address",
    desc: "section husband tin population wonderful danger somehow generally chosen anywhere plenty cabin careful",
    img: "/home-add.png",
  },
  {
    id: 3,
    name: "Fast Delivery",
    desc: "lose uncle join recently wear bicycle develop radio something along enough double let root brought monkey ",
    img: "/fast-deliver.png",
  },
];

export const support: chooseProps[] = [
  {
    id: 1,
    name: "Choose Your Item",
    desc: "crop establish whispered led dollar shop newspaper somebody opportunity warn tide body flame title phrase ",
    img: "/select.png",
  },
  {
    id: 2,
    name: "We Delivery Your Meals",
    desc: "section husband tin population wonderful danger somehow generally chosen anywhere plenty cabin careful",
    img: "/Delivery.png",
  },
  {
    id: 3,
    name: "Fast Delivery",
    desc: "lose uncle join recently wear bicycle develop radio something along enough double let root brought monkey ",
    img: "/Support.png",
  },
];

export const continental: continentalProps[] = [
  {
    id: 1,
    name: "America",
    desc: "Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla Rd, Near Dharti Namkin, Chandramani Society, US, America 32505",
    time: "Mon To Fri 9am–6pm",
  },
  {
    id: 2,
    name: "South Africa",
    desc: "Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla Rd, Near Dharti Namkin, Chandramani Society, US, America 32505",
    time: "Mon To Fri 9am–6pm",
  },
  {
    id: 3,
    name: "Canada",
    desc: "Ground Floor, BL-91, Plot 13/24, Udhana - Magdalla Rd, Near Dharti Namkin, Chandramani Society, US, America 32505 ",
    time: "Mon To Fri 9am–6pm",
  },
];

export const avatar: chooseProps[] = [
  {
    id: 1,
    name: "Choose Your Item",
    desc: "crop establish whispered led dollar shop newspaper somebody opportunity warn tide body flame title phrase ",
    img: "/testi1.png",
  },
  {
    id: 2,
    name: "We Delivery Your Meals",
    desc: "section husband tin population wonderful danger somehow generally chosen anywhere plenty cabin careful",
    img: "/testi2.png",
  },
  {
    id: 3,
    name: "Fast Delivery",
    desc: "lose uncle join recently wear bicycle develop radio something along enough double let root brought monkey ",
    img: "/testi3.png",
  },
];

export const navLinks: navLinksInterface[] = [
  { href: "/", label: "Home" },
  { href: "/pizza", label: "Pizza" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];
