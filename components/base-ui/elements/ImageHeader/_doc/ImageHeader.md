# ImageHeader
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| alt | `string` | alt description | `null` |
| children | `union` | Children of the component | `null` |
| focusable | `bool` | Enable focusable in this components. | `true` |
| hoverEffect | `enum` | Effect apply of the image | `null` |
| image | `string` | URI of the image. | `''` |
| imageHeight | `string` | Height of Destination Image | `'250px'` |
| imageWidth | `string` | Width of Destination Image | `'100%'` |
| noLabelImageSettings | `objectOf` |  | `{  position: 'absolute',  padding: '3',  bottom: '0',  right: '0'}` |
| pathNoImageFound | `string` |  | `'https://res.cloudinary.com/dakp804eh/image/upload/v1561045947/airmodules/Utils/NoImageFound.svg'` |
| translate | `func` |  | `() => {}` |