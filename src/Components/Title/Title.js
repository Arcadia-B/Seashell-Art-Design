import React from "react";
const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center py-10">
      <h3 className="text-gray-600 text-lg uppercase tracking-widest mb-2">
        {subTitle}
      </h3>
      <h3 className="text-xl md:text-3xl font-bold text-gray-800">{title}</h3>
    </div>
  );
};

export default Title;
