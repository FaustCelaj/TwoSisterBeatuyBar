'use client'

import styles from './AboutIntro.module.scss'
import { useRef } from 'react'
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion'

type AboutIntroProps = {
  value: string
}

export default function AboutIntro({ value }: AboutIntroProps) {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.7', 'start 0.25'],
  })

  const words = value.split(' ')

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return <Word key={i} range={[start, end]} progress={scrollYProgress} word={word} />
      })}
    </p>
  )
}

type WordProps = {
  word: string
  range: [number, number]
  progress: MotionValue<number>
}

const Word = ({ word, range, progress }: WordProps) => {
  const characters = word.split('')
  const amount = range[1] - range[0]
  const step = amount / characters.length
  return (
    <span className={styles.word}>
      {characters.map((character, i) => {
        const start = range[0] + step * i
        const end = range[0] + step * (i + 1)
        return <Character key={i} range={[start, end]} progress={progress} character={character} />
      })}
    </span>
  )
}

type CharacterProps = {
  character: string
  range: [number, number]
  progress: MotionValue<number>
}

const Character = ({ character, range, progress }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className={styles.shadow}>{character}</span>
      <motion.span style={{ opacity: opacity }}>{character}</motion.span>
    </span>
  )
}
