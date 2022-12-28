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
    username: Yup.string().required('Username is required.'),
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email('Email not valid').required('Email is required.'),
    phone: Yup.string().required('Cellphone is required')
  })
