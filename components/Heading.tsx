import React from 'react'

interface headingProps {
    data:{
        title:string;
        desc:string;
        textCss:string;
    }
}

const Heading = ({data }: headingProps) => {
  return (
    <div className=" space-y-3">
      <h1 className="text-5xl font-semibold">{data.title}</h1>
      <div className="w-32 h-[2.5px] bg-textColor m-auto "></div>
      <p className={`${data.textCss}`}>{data.desc} </p>
    </div>
  );
};

export default Heading
