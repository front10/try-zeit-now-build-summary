import React from "react";
import PropTypes from "prop-types";
import { getUuid } from "@front10/helpers/dist/uuid";
import useStyles from "@front10/helpers/dist/UseStyles";
import ImageHeader from "../ImageHeader";
import Header from "../Header";
import Box from "../Box";
import Text from "../Text";
import DestinationItem from "../DestinationItem";

const DestinationSpace = props => {
  const {
    imageProps: { labelStyle, ...imageProps },
    image,
    name,
    data,
    componentSettings: { itemSettings },
    header,
    showImage,
    onKeyDown,
    showCityName,
    focusReferences,
    focusable
  } = props;
  const [className, style] = useStyles(props);
  const id = getUuid();
  return (
    <Box
      focusable={focusable}
      tabIndex={focusable ? 0 : -1}
      className={`${className} fr-destination-item`}
      style={style}
      focusReferences={focusReferences}
      onKeyDown={onKeyDown}
      dataTestId="destinationItem"
    >
      {showImage && (
        <ImageHeader {...imageProps} image={image}>
          <Text {...labelStyle}>{name}</Text>
        </ImageHeader>
      )}
      {/* {showCityName && (
        <Header id={id} {...header} customHtml={`Going to ${name}`} tag="h5" />
      )} */}
      {data.map(itemData => (
        <DestinationItem data={itemData} {...itemSettings} />
      ))}
    </Box>
  );
};

DestinationSpace.propTypes = {
  /**
   * Image of destination.
   */
  image: PropTypes.string,
  /**
   * image props.
   */
  imageProps: PropTypes.objectOf(PropTypes.any),
  /**
   * Name of destination.
   */
  name: PropTypes.string,
  /**
   * list of data.
   */
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  /**
   * Component that is going to render
   */
  componentSettings: PropTypes.objectOf(PropTypes.any),
  /**
   * Header props
   */
  header: PropTypes.objectOf(PropTypes.any),
  /**
   * Determine if the image will be displayed in the component.
   */
  showImage: PropTypes.bool,
  /**
   * Show or hide the city name
   */
  showCityName: PropTypes.bool,
  /**
   * OnKeyDown function.
   */
  onKeyDown: PropTypes.func,
  /**
   * FocusReferences functions
   */
  focusReferences: PropTypes.func,
  /**
   * Turn off or on tabIndex in the DestinationSpace
   */
  focusable: PropTypes.bool,
  /**
   * Show header in two lines
   */
  showHeaderBreak: PropTypes.bool
};
DestinationSpace.defaultProps = {
  image: "",
  name: "",
  data: [],
  imageProps: {
    rounded: "2"
  },
  componentSettings: {},
  header: {},
  showImage: true,
  showCityName: true,
  showHeaderBreak: false,
  onKeyDown: () => {},
  focusReferences: () => {},
  focusable: false
};
DestinationSpace.componentName = "DestinationSpace";

export default DestinationSpace;
