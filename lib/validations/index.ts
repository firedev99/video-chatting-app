import { CustomHookFormErrorType } from "@/hooks/useForm"

function login<T extends CustomHookFormErrorType>(values: T) {
  let errors: CustomHookFormErrorType = {}

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

function signup<T extends CustomHookFormErrorType>(values: T) {
  let errors: CustomHookFormErrorType = {}

  if (!values.name) {
    errors.name = "name required"
  } else {
    errors.name = null
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

  if (!values.confirmPassword) {
    errors.confirmPassword = "confirm password required"
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "passwords doesn't match"
  } else {
    errors.confirmPassword = null
  }

  return errors
}

export const validationSchema = {
  login,
  signup,
}
