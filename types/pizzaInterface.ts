
export interface data{
    message:string,
    success:boolean,
    pizza:pizza[]
}

export interface pizza{
    _id:string,
    name:string,
    description:string,
    category:string,
    variants:string[],
    price:number[],
    image:string
}