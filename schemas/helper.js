import { AiOutlineFunction } from 'react-icons/ai'

export default {
  name: 'helper',
  title: 'Helpers',
  type: 'document',
  icon: AiOutlineFunction,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'classes',
      title: 'Classes',
      type: 'reference',
      to: [{ type: 'class'}],
      validation: Rule => Rule.required()
    }
  ],
}