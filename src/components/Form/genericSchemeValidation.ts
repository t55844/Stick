import * as yup from "yup";

// set of yup schemas that can be used to configure form fields that are common


export const emailSchema = yup.string().trim()
    .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
        'this must be an email ( email@email.email ) '
    ).required('this is required')

export const passwordSchema = yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        'Password must contain at least one uppercase and one lowercase character ( 123456Aa )'
    )
    .required('Password is required')

export const loguinSchema = yup.object({
    email: yup.string().required('this is required'),
    password: yup.string().required('this is required'),
}).required()