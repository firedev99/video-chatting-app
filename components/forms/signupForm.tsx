import Link from "next/link"
import { Button, Input } from ".."
import { useForm } from "@/hooks/useForm"
import Icon from "@/lib/icons"
import { validationSchema } from "@/lib/validations"

export default function SignupForm() {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useForm({
    formValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationFunc: validationSchema.signup,
    onSubmit: (val) => console.log(val),
  })

  // check if the input has any error status
  function errStatus(key: string): boolean {
    return errors.hasOwnProperty(key) && errors[key] !== null
  }

  return (
    <>
      <h3>Hey, welcome 👋🏼</h3>
      <span className="info_tag">
        Provide us your details for registration.
      </span>
      <Input
        type="text"
        name="Name"
        placeholder="fireboi"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("name")}
      />
      <Input
        type="text"
        name="Email"
        placeholder="example@fireychats.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("email")}
      />
      <Input
        type="password"
        name="Password"
        placeholder="* * * * * * * *"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("password")}
      />
      <Input
        type="password"
        name="Confirm Password"
        placeholder="* * * * * * * *"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        errStaus={errStatus("confirmPassword")}
      />
      <Button
        text="Signup"
        className="submit"
        loader={isSubmitting}
        onClick={handleSubmit}
        style={{ marginTop: "1rem" }}
      />
      <span className="break">or</span>
      <Button>
        <Icon name="google" />
        <span>Sign up with Google</span>
      </Button>
      <Button>
        <Icon name="github" />
        <span>Sign up with Github</span>
      </Button>
      <div className="navigate_tag">
        <span>Already a member? </span>
        <Link href="/auth#login">Login now</Link>
      </div>
    </>
  )
}
