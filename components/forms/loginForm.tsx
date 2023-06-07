import Link from "next/link"
import { Button, Input } from ".."
import { useForm } from "@/hooks/useForm"
import Icon from "@/lib/icons"
import { validationSchema } from "@/lib/validations"

export default function LoginForm() {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    handleSubmit,
  } = useForm({
    formValues: {
      email: "",
      password: "",
    },
    onSubmit: (val) => console.log(val),
    validationFunc: validationSchema.login,
  })

  // check if the input has any error status
  function errStatus(key: string): boolean {
    return errors.hasOwnProperty(key) && errors[key] !== null
  }

  return (
    <>
      <h3>Hey, hello 👋🏼</h3>
      <span className="info_tag">
        Enter the information you wrote while registering.
      </span>
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
      <span className="forgot_tag">Forgot password?</span>
      <Button
        text="Login"
        className="submit"
        loader={isSubmitting}
        onClick={handleSubmit}
      />
      <span className="break">or</span>
      <Button>
        <Icon name="google" />
        <span>Sign in with Google</span>
      </Button>
      <Button>
        <Icon name="github" />
        <span>Sign in with Github</span>
      </Button>
      <div className="navigate_tag">
        <span>Not a member? </span>
        <Link href="/auth#signup">Sign up now</Link>
      </div>
    </>
  )
}
