import {ImProfile} from 'react-icons/im'
export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  icon: ImProfile,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description',
    },
    {
      name: 'about',
      type: 'string',
      title: 'Profile About',
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
    {
      title: 'Logo',
      name: 'logoImage',
      type: 'customImage',
    },
    {
      type: 'object',
      name: 'person',
      fieldsets: [
        {
          name: 'social',
          title: 'Social media handles',
          hidden: false, // Default value
          options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: false, // Defines if the fieldset should be collapsed by default or not
            columns: 2, // Defines a grid for the fields and how many columns it should have
          },
        },
      ],
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Github',
          name: 'githubLink',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Linkedin',
          name: 'linkedinLink',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Twitter',
          name: 'twitterLink',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Instagram',
          name: 'instagramLink',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Facebook',
          name: 'facebookLink',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Medium',
          name: 'mediumLink',
          type: 'string',
          fieldset: 'social',
        },
      ],
    },
  ],
}
