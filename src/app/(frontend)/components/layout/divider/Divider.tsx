import './Divider.module.scss'
import { CSSProperties } from 'react'

type DividerProps = {
  colour?: string
  thickness?: number
  width?: number
  className?: string
}

export default function Divider({
  colour = '#B9A289',
  thickness = 1,
  width = 40,
  className = '',
}: DividerProps) {
  const lineStyle: CSSProperties = {
    backgroundColor: colour,
    height: `${thickness}px`,
    width: `${width}px`,
  }

  return (
    <div className={`divider-container ${className}`}>
      <div className="divider-line" style={lineStyle} />
    </div>
  )
}
