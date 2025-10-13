import { ArrowRight, Sparkles, BookOpen, Code } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-300 px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI <span className="text-primary-400">Docs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto">
            Documentação inteligente e interativa. Crie, edite e navegue pela sua documentação 
            com o poder da inteligência artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Começar Agora</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Ver Código</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">MDX Inteligente</h3>
              <p className="text-dark-300">Documentação rica com componentes interativos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-dark-300">Busca e navegação inteligente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Desenvolvimento</h3>
              <p className="text-dark-300">Fácil de customizar e estender</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}