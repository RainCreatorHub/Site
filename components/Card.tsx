interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-dark-800 border border-dark-700 rounded-lg p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4">
          {title}
        </h3>
      )}
      <div className="text-dark-300">
        {children}
      </div>
    </div>
  )
}