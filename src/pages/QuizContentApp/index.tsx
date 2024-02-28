import React, { useState } from 'react'
import "./style.css"
import questions from '../../components/questions';

const QuizContentApp = () => {

    const [initializeButton, setInitializeButton] = useState(true);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [pontos, setPontos] = useState(0);

    const gameOn = () => {
        setInitializeButton(false);
    }

    const selectQuestion = (e) => {
        console.log(e.target)
        console.log(e.target.value)
        // const value = e.target.value
        // if(value == questions[questionIndex].correctAnswer){
        //     setPontos(pontos + 2)
        // }
        setQuestionIndex(questionIndex + 1);

    }

    function calculatePoints(){

    }

  return (
    <div className='quizBody'>
        <h1 className='appTitle'>Bem vindo ao quiz do <span>timão</span>!</h1>


        <button className='initialize' style={{display:`${initializeButton ? "block" : "none"}`}} onClick={gameOn}>Dale!</button>

        <div className='quizGameContainer' style={{display:`${initializeButton ? "none" : "flex"}`}}>

            <div className='questionsContainer'  style={{display:`${questionIndex > questions.length-2 ? "none": "flex"}`}}>
                
                        
                        <h1 className='questionTitle'>{questions[questionIndex].question}</h1>
                    <div className='questionsBox'>
                        <div className="question" value={questions[questionIndex].answers[0]} onClick={(e) => selectQuestion(e)}>{questions[questionIndex].answers[0]}</div>
                        <div className="question" value={questions[questionIndex].answers[1]} onClick={(e) => selectQuestion(e)}>{questions[questionIndex].answers[1]}</div>
                        <div className="question" value={questions[questionIndex].answers[2]} onClick={(e) => selectQuestion(e)}>{questions[questionIndex].answers[2]}</div>
                        <div className="question" value={questions[questionIndex].answers[3]} onClick={(e) => selectQuestion(e)}>{questions[questionIndex].answers[3]}</div>
                    </div>
                        
            </div>

            <div className='finalInformations' style={{display:`${questionIndex > questions.length-2 ? "flex" : "none"}`}}>
                        <h1>parabens, voce completou o quiz do timao!!</h1>
                        <h3>sua pontuação: </h3>
                    </div>

        </div>
    </div>
  )
}

export default QuizContentApp