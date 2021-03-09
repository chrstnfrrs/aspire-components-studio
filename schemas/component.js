import { IoLogoWebComponent } from 'react-icons/io5'

export default {
  name: 'component',
  title: 'Components',
  type: 'document',
  icon: IoLogoWebComponent,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Layout', value: 'layout' },
          { title: 'Text', value: 'text' },
          { title: 'Input', value: 'input' },
          { title: 'Element', value: 'element' },
          { title: 'Block', value: 'block' },
          { title: 'Functions', value: 'function' },
        ]
      },
    },
    {
      name: 'props',
      title: 'Props',
      type: 'array',
      of: [{type:'reference', to: [{type:'prop'}]}],
      validation: Rule => Rule.required()
    }
  ],
}