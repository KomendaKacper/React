import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import quizCompleteImg from "../assets/quiz-complete.png"; 

export default function Question({ questionText, answers, onSelectAnswer }) {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

    return (
        <div>
            <Question questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            onSelectedAnswers={handleSelectAnswer}/>
        </div>
    )