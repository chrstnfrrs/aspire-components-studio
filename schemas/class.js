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
    }
  ],
}