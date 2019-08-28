import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button";

const CallToActionAtom = props => {
  const { callToActionText } = props;

  return <Button {...props}>{callToActionText}</Button>;
};

CallToActionAtom.propTypes = {
  callToActionText: PropTypes.string
};

CallToActionAtom.defaultProps = {
  callToActionText: ""
};

export default CallToActionAtom;
