import * as yup from 'yup'

/* schema login */
export const loginSchema = yup.object({
  cellphone: yup
    .string()
    .required('Username is required.'),
  password: yup
    .string()
    .required('Password is required.')
}).required()
