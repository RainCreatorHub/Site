import { Terminal, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function QuickStart() {
  const [copied, setCopied] = useState(false)

  const code = `# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar http://localhost:3000`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comece em Minutos
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Configure sua documentação AI-powered em poucos passos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Instalação Rápida
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Clone o repositório</h4>
                  <p className="text-dark-300">Baixe o código fonte do projeto</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Instale dependências</h4>
                  <p className="text-dark-300">Execute npm install para instalar os pacotes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Execute o projeto</h4>
                  <p className="text-dark-300">Inicie o servidor de desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-primary-400" />
                  <span className="text-sm font-medium text-white">Terminal</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 text-dark-300 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="text-sm">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-primary-300 overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}