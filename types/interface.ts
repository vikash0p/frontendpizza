
export interface sliderProps {
  id: number;
  name: string;
  tag: string;
  description: string;
  img: string;
}
export interface chooseProps {
  id: number;
  name: string;
  desc: string;
  img: string;
}

export interface continentalProps {
  id: number;
  name: string;
  desc: string;
  time: string;
}


export interface navLinksInterface {
  href: string;
  label: string;
}


export interface data {
  message: string;
  success: boolean;
  pizza: pizza[];
}

export interface pizza {
  _id: string;
  name: string;
  description: string;
  category: string;
  variants: string[];
  price: number[];
  image: string;
}


export interface UserDetails {
  message: string;
  success: boolean;
  user: UserData;
}

export interface UserData {
  _id: string;
  fullName: string;
  email: string;
  role: string;
}
