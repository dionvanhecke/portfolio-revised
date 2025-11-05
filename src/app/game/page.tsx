'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trophy, Zap, Target, Users, BookOpen, Search, Star, Sparkles, Briefcase, LucideIcon } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  funFact: string
  icon: LucideIcon
}

const questions: Question[] = [
  {
    id: 1,
    question: "Wat is mijn grootste sterkte als developer?",
    options: ["Snel leren van nieuwe technologieën", "Perfecte code schrijven", "Alleen frontend", "Alleen backend"],
    correct: 0,
    funFact: "Ik leer snel nieuwe technologieën - van Tauri tot Coolify, ik duik graag in nieuwe tools!",
    icon: Zap
  },
  {
    id: 2,
    question: "Hoe pak ik een nieuw project aan?",
    options: ["Direct beginnen coderen", "Eerst grondig plannen en architectuur uitdenken", "Alleen volgen wat anderen zeggen", "Wachten op perfecte requirements"],
    correct: 1,
    funFact: "Ik begin met een solide architectuur en plan, maar blijf flexibel voor veranderingen tijdens ontwikkeling.",
    icon: Target
  },
  {
    id: 3,
    question: "Wat vind ik belangrijk in een team?",
    options: ["Alleen solo werken", "Open communicatie en samenwerking", "Hiërarchie boven alles", "Geen meetings"],
    correct: 1,
    funFact: "Tijdens mijn stage leerde ik dat goede communicatie en teamwork essentieel zijn voor succes!",
    icon: Users
  },
  {
    id: 4,
    question: "Hoe houd ik mijn skills up-to-date?",
    options: ["Alleen op het werk leren", "Actief experimenteren met nieuwe tech in eigen projecten", "Wachten tot het verplicht is", "Alleen tutorials volgen"],
    correct: 1,
    funFact: "Ik experimenteer constant met nieuwe technologieën - zie mijn portfolio met Next.js, Tauri, Coolify en meer!",
    icon: BookOpen
  },
  {
    id: 5,
    question: "Wat is mijn aanpak bij problemen?",
    options: ["Opgeven en hulp vragen", "Systematisch debuggen en root cause vinden", "Random dingen proberen", "Probleem negeren"],
    correct: 1,
    funFact: "Ik los problemen op door systematisch te debuggen en de root cause te vinden - niet alleen symptoms fixen!",
    icon: Search
  },
  {
    id: 6,
    question: "Wat motiveert mij het meest?",
    options: ["Alleen salaris", "Impact maken en problemen oplossen", "Status en titels", "Minimale effort"],
    correct: 1,
    funFact: "Mijn stage-award bewijst dit: ik maakte tools die medestudenten echt hielpen - impact is mijn drive!",
    icon: Star
  },
  {
    id: 7,
    question: "Hoe sta ik tegenover code quality?",
    options: ["Maakt niet uit, als het werkt", "Clean code, testing en documentatie zijn essentieel", "Alleen comments schrijven", "Code quality is tijdverspilling"],
    correct: 1,
    funFact: "Ik gebruik TypeScript voor type-safety, schrijf tests en documenteer mijn code - kwaliteit is belangrijk!",
    icon: Sparkles
  },
  {
    id: 8,
    question: "Wat is mijn ideale werkomgeving?",
    options: ["Alleen remote zonder contact", "Hybride met goede balans en moderne tech stack", "Altijd op kantoor 9-5", "Geen voorkeur"],
    correct: 1,
    funFact: "Ik werk graag hybride met moderne tools en een team dat open staat voor nieuwe ideeën en technologieën!",
    icon: Briefcase
  }
]

export default function RecruiterGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setGameFinished(true)
      }
    }, 3000)
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameFinished(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return { title: "Perfect! 🎉", message: "Je kent me beter dan ikzelf! Laten we samenwerken!" }
    if (percentage >= 75) return { title: "Geweldig! 🌟", message: "Je hebt duidelijk je huiswerk gedaan. Ik ben onder de indruk!" }
    if (percentage >= 50) return { title: "Goed bezig! 👍", message: "Je weet al aardig wat over me. Wil je meer weten? Neem contact op!" }
    return { title: "Niet slecht! 😊", message: "Er is nog veel te ontdekken. Laten we kennismaken!" }
  }

  if (gameFinished) {
    const result = getScoreMessage()
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-950 dark:to-neutral-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-2xl border border-neutral-200 dark:border-neutral-800 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
              {result.title}
            </h2>
            
            <p className="text-6xl font-bold text-black dark:text-white mb-6">
              {score}/{questions.length}
            </p>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              {result.message}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:shadow-lg transition-shadow"
              >
                Speel opnieuw
              </motion.button>
              
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-xl font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Neem contact op
                </motion.button>
              </Link>
              
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Terug naar portfolio
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-950 dark:to-neutral-900 p-6">
      <div className="max-w-4xl mx-auto py-12">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug naar portfolio
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Developer Profile Quiz
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Ontdek mijn werkstijl, mindset en technische aanpak
          </p>
        </motion.div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index < currentQuestion
                    ? 'w-8 bg-green-500'
                    : index === currentQuestion
                    ? 'w-12 bg-black dark:bg-white'
                    : 'w-8 bg-neutral-300 dark:bg-neutral-700'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-black dark:text-white font-medium">
            <Trophy className="w-5 h-5" />
            <span>{score}/{questions.length}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-800"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-black dark:bg-white flex items-center justify-center">
                <question.icon className="w-10 h-10 text-white dark:text-black" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                {question.question}
              </h2>
            </div>

            <div className="grid gap-4 mb-8">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 rounded-xl text-left font-medium transition-all ${
                    selectedAnswer === null
                      ? 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white'
                      : index === question.correct
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600'
                  }`}
                >
                  <span className="text-lg">{option}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-6 rounded-xl ${
                    selectedAnswer === question.correct
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  }`}
                >
                  <p className={`font-bold mb-2 ${
                    selectedAnswer === question.correct
                      ? 'text-green-700 dark:text-green-400'
                      : 'text-red-700 dark:text-red-400'
                  }`}>
                    {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Helaas!'}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {question.funFact}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
