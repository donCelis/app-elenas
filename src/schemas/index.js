import * as Yup from 'yup'

/* schema login */
export const loginSchema = Yup.object({})
  .shape({
    cellphone: Yup.string().required('Cellphone is required.'),
    password: Yup.string().required('Password is required.')
  })

/* schema add user */
export const addUserSchema = Yup.object({})
  .shape({
    firstName: Yup.string().required('First Name is required.'),
    lastName: Yup.string().required('Last Name is required.'),
    cellphone: Yup.string().required('Cellphone is required.'),
    cedula: Yup.string().required('Cedula is required.'),
    address: Yup.string().required('Address is required.')
  })
