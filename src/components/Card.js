import React from "react";

// We must pass an object with "data" as key and with an array as value: {data:array}
function Card(prop) {
  const { data } = prop;

  return (
    <React.Fragment>
      {data.map((object) => {
        const { id, url } = object;

        return <img key={id} id={id} src={url} alt={id} />;
      })}
    </React.Fragment>
  );
}

export default Card;
