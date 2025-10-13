import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react'

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success'
  children: React.ReactNode
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const icons = {
    info: <Info className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />
  }

  const colors = {
    info: 'border-blue-500/50 bg-blue-500/10 text-blue-300',
    warning: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-300',
    error: 'border-red-500/50 bg-red-500/10 text-red-300',
    success: 'border-green-500/50 bg-green-500/10 text-green-300'
  }

  return (
    <div className={`border-l-4 ${colors[type]} p-4 my-6 rounded-r-lg`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}