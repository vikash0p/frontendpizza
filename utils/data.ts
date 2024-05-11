
interface slider{
    id:number;
    name:string;
    tag:string;
    description:string;
    img:string
}
interface choose{
    id:number;
    name:string;
    desc:string;
    img:string
}

interface continental{
    id:number;
    name:string;
    desc:string;
    time:string
}
export const slider :slider[] = [
  {
    id: 1,
    name: "seafood pizza",
    tag: "Buy #1 Get #2",
    description: "This is the best pizza you will ever taste",
    img: "/S1.png",
  },
  {
    id: 2,
    name: "seafood pizza",
    tag: "Buy #1 Get #2",

    description: "This is the best pizza you will ever taste",
    img: "/slider-2.png",
  },
];

export const choose:choose[] = [
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



export const support: choose[] = [
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

export const continental: continental[] = [
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



export const avatar: choose[] = [
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