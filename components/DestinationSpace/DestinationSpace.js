import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";
import ImageHeader from "../ImageHeader";
import Box from "../Box";
import Text from "../Text";
import DestinationItem from "../DestinationItem";

const DestinationSpace = props => {
  const {
    image,
    title,
    data,
    components,
    showImage,
    onKeyDown,
    focusReferences,
    focusable
  } = props;
  const [className, style] = useStyles(props);
  return (
    <Box
      focusable={focusable}
      tabIndex={focusable ? 0 : -1}
      className={`${className}`}
      style={style}
      focusReferences={focusReferences}
      onKeyDown={onKeyDown}
    >
      {showImage && (
        <ImageHeader {...components.imageHeader}>
          <Text {...components.imageHeader.labelStyle}>{components.imageHeader.title}</Text>
        </ImageHeader>
      )}
      {data.map(({ id, ...itemData }) => (
        <DestinationItem key={id} data={itemData} {...components.destinationItem} />
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
