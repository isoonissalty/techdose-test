import React, { useState, useEffect } from 'react'
import RadioInput from '../components/RadioInput';

const myQuestions = [
  {
    question: "1 + 2 is?",
    answers: [
      "1",
      "2",
      "3"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the best site for Web Programmer ?",
    answers:
      [
        "Stack Overflow",
        "Quora",
        "w3school"
      ]
    ,
    correctAnswer: 0
  },
  {
    question: "Who is Prime minister fo Thailand?",
    answers:
      [
        "Prayut Chan-o-cha",
        "Yingluck Shinawatra",
        "Abhisit Vejjajiva",
        "Somchai Wongsawat"
      ]
    ,
    correctAnswer: 0
  }
];

const Ans2 = () => {

  const [state, setState] = useState(myQuestions.map((val, id) => ({ id: id, selected: -1, error: true, focus: false })))
  const [point, setPoint] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    console.log(state)
  }, [state])

  function handleSelectChange(e, id) {
    let { value } = e.target
    let temp = [...state]
    temp[id].selected = Number(value)
    temp[id].focus = true
    temp[id].error = (temp[id].selected === -1 && temp[id].focus)
    setState(temp)
  }

  function handleSubmit() {

    checkUserAnswerAllQuestion()
    let c = 0
    state.map((val, id) => {
      c = c + checkAnswer(id, val.selected)
      return null
    })
    setPoint(c)
    setIsSubmit(true)
  }

  function checkAnswer(qid, ans) {
    return myQuestions[qid].correctAnswer === ans
  }

  function checkUserAnswerAllQuestion() {
    state.map((val, id) => {
      let temp = [...state]
      temp[id].focus = true
      setState(temp)
      return null
    })
  }

  function renderQuestion() {
    return myQuestions.map((val, qid) => {
      return (
        <div key={qid}>
          <h2>{val.question}</h2>
          {
          (state[qid].selected === -1 && state[qid].focus) 
            && <span style={{ fontSize: 12, marginBottom: 15, color: 'red' }}>ท่านยังไม่ได้ตอบข้อนี้</span>
          }
          <div>
            {
              val.answers.map((ans, id) => (
                <RadioInput key={id} 
                  value={id} 
                  name={ans} 
                  checked={id === state[qid].selected} 
                  onChange={(e) => handleSelectChange(e, qid)} 
                  />
              ))
            }
          </div>
        </div>
      )
    })
  }

  return (
    <div id="question-section">
      {renderQuestion()}
      <hr />
      <button onClick={handleSubmit}>submit</button> {isSubmit && <span>ท่านได้: {point} คะแนน</span>}
      <button onClick={()=>window.location.reload()}>reset</button>
    </div>
  )
}

export default Ans2
