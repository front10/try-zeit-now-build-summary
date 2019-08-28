import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '@front10/helpers/dist/UseStyles';

const Header = props => {
  const { tag, content, customHtml, id } = props;
  const Type = tag;
  const [className, style] = useStyles(props);

  return customHtml ? (
    <Type
      id={id}
      className={`fr-${tag} ${className}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: customHtml }}
    />
  ) : (
    <Type id={id} className={`fr-${tag} ${className}`} style={style}>
      {content}
    </Type>
  );
};

Header.propTypes = {
  /**
   * Type of tag element. Can be <code>'h1'</code>, <code>'h2'</code>, <code>'h3'</code>, <code>'h4'</code>, <code>'h5'</code> and <code>'h6'</code>
   */
  tag: PropTypes.string,
  /**
   * Content of the component
   */
  content: PropTypes.string,
  /**
   * CustomHtml of the component
   */
  customHtml: PropTypes.string,
  id: PropTypes.string
};

Header.defaultProps = {
  tag: 'h2',
  content: '',
  customHtml: '',
  id: null
};
Header.componentName = 'Header';

export default Header;
