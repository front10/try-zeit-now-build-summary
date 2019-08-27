import React from "react";
import PropTypes from "prop-types";
import { getUuid } from "@front10/helpers/dist/uuid";
import useStyles from "@front10/helpers/dist/UseStyles";
import ImageHeader from "../../elements/ImageHeader";
import Header from "../../elements/Header";
import Box from "../../elements/Box";
import Text from "../../elements/Text";
// import ListColumns from '../../lists/ListColumns';
// import FareItemMediumSize from '../FareItemMediumSize';
// import ItemContainer from './atoms/ItemContainer';

const DestinationSpace = props => {
  const {
    imageProps: { labelStyle, ...imageProps },
    image,
    name,
    data,
    componentSettings,
    translate,
    header,
    showImage,
    onKeyDown,
    columnNumbers,
    showCityName,
    focusReferences,
    focusable,
    oneColumn
  } = props;
  const [className, style] = useStyles(props);
  const id = getUuid();
  const origin = data[0] ? data[0].origin : "";
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
        <ImageHeader {...imageProps} image={image} translate={translate}>
          <Text {...labelStyle}>{name}</Text>
          {/* <ItemContainer
            {...imageProps.container}
            text={name}
            translate={translate}
          /> */}
        </ImageHeader>
      )}
      {showCityName && (
        <Header id={id} {...header} cust omHtml={`Going to ${name}`} tag="h5" />
      )}
      {/* <ListColumns
        {...componentSettings}
        columnNumbers={columnNumbers}
        ItemComponentInstance={FareItemMediumSize}
        itemsData={data}
        oneColumn={oneColumn}
        ariaLabelledBy={id}
        translate={translate}
      /> */}
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
   * Function to translate the component
   */
  translate: PropTypes.func,
  /**
   * Determine if the image will be displayed in the component.
   */
  showImage: PropTypes.bool,
  /**
   * Function to translate the component
   */
  columnNumbers: PropTypes.number,
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
  showHeaderBreak: PropTypes.bool,
  /**
   * Traffix variants
   */
  traffixVariant: PropTypes.string,
  /**
   * Show list in one column
   */
  oneColumn: PropTypes.bool
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
  translate: () => {},
  showImage: true,
  showCityName: true,
  showHeaderBreak: false,
  columnNumbers: null,
  onKeyDown: () => {},
  focusReferences: () => {},
  focusable: false,
  oneColumn: true
};
DestinationSpace.componentName = "DestinationSpace";

export default DestinationSpace;
