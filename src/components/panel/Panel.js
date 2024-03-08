import React from "react";
// пожключение иблиотеки
import PropTypes from "prop-types";

// передача пропсов
const Panel = ({ title, children }) => {
  return (
    //   рендер по условию
    <div>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};

Panel.defaultProps = {
  title: "",
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
