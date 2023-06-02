type ValidationPropsType = {
  [key: string]: string | null
}

function login<T extends ValidationPropsType>(values: T) {
  let errors: ValidationPropsType = {}

  if (!values.username) {
    errors.username = "username required"
  } else {
    errors.username = null
  }

  if (!values.email) {
    errors.email = "email required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "invalid email address"
  } else {
    errors.email = null
  }

  if (!values.password) {
    errors.password = "password required"
  } else if (values.password.length < 8) {
    errors.password = "password must be atleast 8 characters"
  } else {
    errors.password = null
  }

  return errors
}

export const validationSchema = {
  login,
}
