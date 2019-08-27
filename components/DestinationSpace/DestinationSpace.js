import React from "react";
import PropTypes from "prop-types";
import useStyles from "@front10/helpers/dist/UseStyles";
import ImageHeader from "../ImageHeader";
import Box from "../Box";
import Text from "../Text";
import DestinationItem from "../DestinationItem";

const DestinationSpace = props => {
  const {
    imageProps: { labelStyle, ...imageProps },
    image,
    name,
    data,
    itemSettings,
    showImage
  } = props;
  const [className, style] = useStyles(props);
  return (
    <Box className={`${className} fr-destination-item`} style={style}>
      {showImage && (
        <ImageHeader {...imageProps} image={image}>
          <Text {...labelStyle}>{name}</Text>
        </ImageHeader>
      )}
      {data.map(({ id, ...itemData }) => (
        <DestinationItem key={id} data={itemData} {...itemSettings} />
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
   * Determine if the image will be displayed in the component.
   */
  showImage: PropTypes.bool
};
DestinationSpace.defaultProps = {
  image: "",
  name: "",
  data: [],
  imageProps: {
    rounded: "2"
  },
  showImage: true
};
DestinationSpace.componentName = "DestinationSpace";

export default DestinationSpace;
