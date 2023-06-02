import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, memo } from "react"
import { InputWrapper } from "./styles"

type InputType = {
  type: HTMLInputTypeAttribute
  name: string
  value: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const CustomInput = memo(function CustomInput({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
}: InputType) {
  return (
    <InputWrapper
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
})

export default CustomInput
