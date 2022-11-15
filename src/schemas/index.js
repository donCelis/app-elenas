import * as yup from 'yup'

/* schema login */
export const loginSchema = yup.object({
  cellphone: yup
    .string()
    .required('Cellphone is required.'),
  password: yup
    .string()
    .required('Password is required.')
}).required()
