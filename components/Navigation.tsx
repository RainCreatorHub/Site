'use client'

import { useState } from 'react'
import { Menu, X, Search, BookOpen, Zap } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">AI Docs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">Recursos</a>
            <a href="#docs" className="nav-link">Documentação</a>
            <a href="#api" className="nav-link">API</a>
            <a href="#examples" className="nav-link">Exemplos</a>
            <button className="btn-primary flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800">
              <a href="#features" className="nav-link block">Recursos</a>
              <a href="#docs" className="nav-link block">Documentação</a>
              <a href="#api" className="nav-link block">API</a>
              <a href="#examples" className="nav-link block">Exemplos</a>
              <button className="btn-primary w-full flex items-center justify-center space-x-2 mt-4">
                <Search className="h-4 w-4" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}