import { MdBrush } from 'react-icons/md'

export default {
  name: 'class',
  title: 'Classes',
  type: 'document',
  icon: MdBrush,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'property',
      title: 'CSS Property',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'value',
      title: 'CSS Value',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
}