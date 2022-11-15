import * as yup from 'yup'

/* schema login */
export const loginSchema = yup
  .object({
    cellphone: yup.string().required('Cellphone is required.'),
    password: yup.string().required('Password is required.')
  })
  .required()

/* schema add user */
export const addUserSchema = yup
  .object({
    firstName: yup.string().required('First Name is required.'),
    lastName: yup.string().required('Last Name is required.'),
    cellphone: yup.string().required('Cellphone is required.'),
    cedula: yup.string().required('Cedula is required.'),
    address: yup.string().required('Address is required.')
  })
  .required()
