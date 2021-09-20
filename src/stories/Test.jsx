import React from "react";
import PropTypes from "prop-types";

export const Test = ({ text }) => {
  return <div>Text: {text}</div>;
};

Test.propTypes = {
  // Text to display
  text: PropTypes.string,
};

Test.defaultProps = {
  text: "Default text",
};
