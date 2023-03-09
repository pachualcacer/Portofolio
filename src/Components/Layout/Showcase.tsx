import React from "react";

type Props = {
  images: string[];
};

const Showcase = (props: Props) => {
  return (
    <div>
      {props.images.map((item) => (
        <img src={item}></img>
      ))}
    </div>
  );
};

export default Showcase;
