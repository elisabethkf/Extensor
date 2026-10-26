import {defineField} from 'sanity'
import {lagKategoriInput} from '../KategoriInput'

// Tekstfelt der redaktørene velger en eksisterende kategori eller legger til en ny.
export const kategoriFelt = ({name, title, dokumentType, visningsnavn}) =>
  defineField({
    name,
    title,
    type: 'string',
    components: {input: lagKategoriInput({dokumentType, felt: name, visningsnavn})},
    validation: (r) => r.required(),
  })
