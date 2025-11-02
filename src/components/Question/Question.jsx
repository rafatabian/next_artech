"use client"

import { useState } from "react"
import styles from "./Question.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const Question = ({question, answer, color}) => {
    const [showQuestion, setShowQuestion] = useState(false)

  return (
<div
  className={`${styles.question_container} ${
    color % 2 === 1 ? styles.question_green_container : ""
  }`}
  onClick={() => setShowQuestion(!showQuestion)}
>        <div>
            <div>
              <p>{question}</p>
              {showQuestion 
              ?<IoIosArrowUp/>
              :<IoIosArrowDown/>}
            </div>
        <div className={`${styles.help_answer} ${
              showQuestion ? styles.visible : styles.hidden
            }`}>
            <p>{answer}</p>
        </div>
        </div>
      </div>
  )
}

export default Question