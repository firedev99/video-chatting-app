import { useCallback, useEffect, useState } from "react"
import { TypeWriterContainer, TypeWritterModalWrapper } from "./styles"
import { Josefin_Sans } from "next/font/google"
import AppLogo from "../logo"

const words = [
  "lets you connect with your friends, family and collegues!",
  "comes with high quality features!",
  "is easy to use!",
  "keeps the virtual hangouts memoriable!",
]

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
})

export default function TypeWriter() {
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [visibleChars, setVisibileChars] = useState<string>("")
  const [visibleCharLength, setVisibileCharLength] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [delay, setDelay] = useState(100)

  // typewriter effect
  const typeWriterEffect = useCallback(() => {
    const word = words[wordIndex]
    // start slicing forwards
    if (!isDeleting) {
      //increase visible characters length
      setVisibileCharLength((prev) => prev + 1)
      setVisibileChars(word.substring(0, visibleCharLength))
    }

    // start slicing backwards
    if (isDeleting) {
      setDelay(100)
      setVisibileCharLength((prev) => prev - 1)
      setVisibileChars(word.substring(0, visibleCharLength))
      // move to next word
      if (visibleCharLength === 0) {
        setVisibileCharLength(1)
        setVisibileChars("")
        setIsDeleting(false)
        setWordIndex((prev) => prev + 1)
      }
    }

    // allow word to start deleting backwards
    if (visibleCharLength === word.length) {
      setIsDeleting(true)
      setDelay(3000)
    }
  }, [isDeleting, visibleCharLength, wordIndex])

  useEffect(() => {
    // start again if the visible word index
    // is greater than or equal to the length of the words array
    if (wordIndex >= words.length) {
      setWordIndex(0)
    }

    const startSlicing = setInterval(typeWriterEffect, delay)

    return () => {
      clearInterval(startSlicing)
    }
  }, [typeWriterEffect, wordIndex, delay])

  return (
    <TypeWritterModalWrapper>
      <AppLogo />
      <h1 className={josefinSans.className}>Hey, creative minds! 🦊</h1>
      <TypeWriterContainer>
        <h3>Firey Chats </h3>
        <span> {visibleChars}</span>
      </TypeWriterContainer>
      <span className={`${josefinSans.className} tag`}>@firedev99</span>
    </TypeWritterModalWrapper>
  )
}
