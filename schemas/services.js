import {MdOutlineMiscellaneousServices} from 'react-icons/md'
export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  icon: MdOutlineMiscellaneousServices,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
    },
    {
      name: 'w_image',
      type: 'image',
      title: 'White Image',
    },
    {
      name: 'b_image',
      type: 'image',
      title: 'Black Image',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
  ],
}
