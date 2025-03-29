// src/app/(frontend)/hooks/useFAQData.tsx
'use client'

import { useState, useEffect } from 'react'

// Define types for the FAQ data structure
export type FAQItem = {
  id: string
  question: string
  answer: string | { root: { children: any[] } } // Support for rich text from Payload
  displayOrder?: number
  isActive: boolean
}

export type FAQCategory = {
  id: string
  name: string
  description?: string
  isGeneral: boolean
  displayOrder?: number
  isActive: boolean
  faqs?: FAQItem[]
}

type UseFAQDataProps = {
  categoryId?: string // Optional - if provided, fetch only this category
  isGeneral?: boolean // Optional - if true, fetch only general FAQs
  limit?: number // Optional - limit the number of FAQs per category
}

export const useFAQData = ({ categoryId, isGeneral, limit }: UseFAQDataProps = {}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<FAQCategory[]>([])

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        setLoading(true)

        // Fetch categories based on filters
        let categoriesUrl = '/api/faq-categories?'

        if (categoryId) {
          categoriesUrl += `id=${categoryId}&`
        }

        if (isGeneral !== undefined) {
          categoriesUrl += `where[isGeneral][equals]=${isGeneral}&`
        }

        categoriesUrl += 'where[isActive][equals]=true&sort=displayOrder'

        const categoriesResponse = await fetch(categoriesUrl)
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch FAQ categories')
        }

        const categoriesData = await categoriesResponse.json()
        const fetchedCategories = categoriesData.docs || []

        // For each category, fetch associated FAQs
        const categoriesWithFAQs = await Promise.all(
          fetchedCategories.map(async (category: FAQCategory) => {
            let faqsUrl = `/api/faqs?where[category][equals]=${category.id}&where[isActive][equals]=true&sort=displayOrder`

            if (limit) {
              faqsUrl += `&limit=${limit}`
            }

            const faqsResponse = await fetch(faqsUrl)
            if (!faqsResponse.ok) {
              throw new Error(`Failed to fetch FAQs for category ${category.name}`)
            }

            const faqsData = await faqsResponse.json()
            return {
              ...category,
              faqs: faqsData.docs || [],
            }
          }),
        )

        setCategories(categoriesWithFAQs)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        console.error('Error fetching FAQ data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFAQData()
  }, [categoryId, isGeneral, limit])

  // Helper function to format rich text answers if needed
  const formatAnswer = (answer: any): string => {
    if (typeof answer === 'string') return answer

    // Handle rich text format from Payload
    if (answer?.root?.children) {
      return answer.root.children
        .map((child: any) => {
          if (child.children) {
            return child.children.map((textNode: any) => textNode.text || '').join('')
          }
          return ''
        })
        .join('\n')
    }

    return ''
  }

  return {
    loading,
    error,
    categories,
    formatAnswer,
  }
}
