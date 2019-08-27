import React from "react";
import { mergeDeep } from "../helpers/utils";

const withFlavors = (WrappedComponent, defaultProps) => {
  const Flavor = props => {
    const { flavor } = props;
    const flavorObj = WrappedComponent.flavors
      ? { ...WrappedComponent.flavors[flavor] }
      : {};
    const flavorProps = mergeDeep({}, flavorObj);
    const componentProps = mergeDeep(flavorProps, props);
    const newProps = Object.assign({}, defaultProps, componentProps);
    return <WrappedComponent {...newProps} />;
  };

  Flavor.propTypes = WrappedComponent.propTypes;

  Flavor.defaultProps = WrappedComponent.defaultProps;

  return Flavor;
};
export default withFlavors;
