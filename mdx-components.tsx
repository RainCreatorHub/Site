import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from '@/components/CodeBlock'
import { Callout } from '@/components/Callout'
import { Card } from '@/components/Card'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: CodeBlock,
    Callout,
    Card,
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold text-white mb-4 mt-6" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold text-white mb-3 mt-5" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-dark-300 mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside text-dark-300 mb-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-dark-300" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-dark-300 my-4" {...props}>
        {children}
      </blockquote>
    ),
    a: ({ children, ...props }) => (
      <a className="text-primary-400 hover:text-primary-300 underline" {...props}>
        {children}
      </a>
    ),
  }
}