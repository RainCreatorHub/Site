import { Search, Zap, Palette, Code, BookOpen, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary-400" />,
      title: "Busca Inteligente",
      description: "Encontre informações instantaneamente com busca semântica powered by AI"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-400" />,
      title: "MDX Interativo",
      description: "Componentes React integrados diretamente na documentação"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary-400" />,
      title: "Tema Escuro",
      description: "Interface moderna e confortável para os olhos"
    },
    {
      icon: <Code className="h-8 w-8 text-primary-400" />,
      title: "Syntax Highlighting",
      description: "Destaque de sintaxe para múltiplas linguagens de programação"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-400" />,
      title: "Navegação Intuitiva",
      description: "Estrutura de navegação clara e organizada"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-400" />,
      title: "Colaborativo",
      description: "Edição em tempo real e versionamento integrado"
    }
  ]

  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recursos Poderosos
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Uma plataforma completa para criar documentação moderna e interativa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:border-primary-500/50 transition-colors duration-200">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}