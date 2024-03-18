import {RiProjectorFill} from 'react-icons/ri'
export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  icon: RiProjectorFill,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
