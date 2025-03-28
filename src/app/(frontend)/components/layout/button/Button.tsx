'use client'

import { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'small' | 'medium' | 'large'
  className?: string
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonClasses = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${icon ? styles.hasIcon : ''} 
    ${icon && iconPosition === 'left' ? styles.iconLeft : ''} 
    ${className}
  `

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const buttonContent = (
    <>
      <span className={styles.buttonText}>{children}</span>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      <span className={styles.buttonBg} />
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {buttonContent}
    </button>
  )
}
