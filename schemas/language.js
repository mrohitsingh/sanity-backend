import {RiCodeBoxFill} from 'react-icons/ri'
export default {
  name: 'language',
  type: 'document',
  title: 'Language',
  icon: RiCodeBoxFill,
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
