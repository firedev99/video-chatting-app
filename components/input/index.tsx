import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, memo } from "react"
import { InputWrapper } from "./styles"
import { firey } from "@/lib/utils"

type InputType = {
  type: HTMLInputTypeAttribute
  name: string
  value: string
  placeholder?: string
  errStaus?: boolean
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
  errStaus,
}: InputType) {
  const _name = firey.camelize(name)

  return (
    <InputWrapper>
      <label>
        <input
          type={type}
          name={_name}
          placeholder={placeholder}
          spellCheck="false"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={errStaus ? "error" : ""}
        />
        <span>{name}</span>
      </label>
    </InputWrapper>
  )
})

export default CustomInput
