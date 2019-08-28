/**
 * Check if the image is in the viewport
 * @param {String} id
 */
const isElementInViewport = id => {
  const el = document.getElementById(id);
  if (el) {
    const rect = el.getBoundingClientRect();
    return rect.height + rect.top >= 0 && rect.top < window.innerHeight;
  }
  return false;
};

/**
 * Load the image
 * @param {boolean} loaded
 * @param {*} image
 * @param {*} destinationImage
 * @param {number} heightDestinationImage
 * @param {number} widthDestinationImage
 */
const loadImage = (loaded, imageNode, image, heightImage, widthImage, pathNoImageFound, imageBgPos) => {
  if (!loaded) {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = image;
    hdLoaderImg.onload = () => {
      if (imageNode) {
        imageNode.setAttribute(
          'style',
          `background-image: url('${image}');height: ${heightImage};width: ${widthImage}; background-position: ${imageBgPos};`
        );
        const imageLabelNode = imageNode.querySelector('.cmp-image-label');
        if (imageLabelNode) {
          imageLabelNode.setAttribute('class', 'cmp-image-label fr-d-none');
        }
      }
    };
    hdLoaderImg.onerror = () => {
      imageNode.setAttribute(
        'style',
        `background-image: url('${pathNoImageFound}');height: ${heightImage};width: ${widthImage}`
      );
      const imageLabelNode = imageNode.querySelector('.cmp-image-label');
      if (imageLabelNode) {
        imageLabelNode.setAttribute('class', 'cmp-image-label fr-d-block');
      }
    };
  }
  return imageNode;
};

/**
 * Look for the scroll parent, if there are any
 * @param {*} node
 * @param {Array} scrollParents
 */
const getScrollParent = (node, scrollParents) => {
  if (node === null) return scrollParents;
  if (node.scrollHeight > node.clientHeight) {
    if (node.nodeName.toLowerCase() !== 'html') scrollParents.push(node);
    else scrollParents.push(window);
  }
  getScrollParent(node.parentNode, scrollParents);
  return scrollParents;
};

export { isElementInViewport, loadImage, getScrollParent };
