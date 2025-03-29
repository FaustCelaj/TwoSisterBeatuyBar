'use client'

import { useState } from 'react'
import { FAQItem, useFAQData, FAQCategory } from '../../../hooks/useFAQData'
import styles from './FAQ.module.scss'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItemProps = {
  item: FAQItem
  isOpen: boolean
  toggleOpen: () => void
}

// Individual FAQ item with toggle functionality
const FAQAccordionItem = ({ item, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.faqQuestion} onClick={toggleOpen} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className={styles.icon}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {isOpen && (
        <div className={styles.faqAnswer}>
          {typeof item.answer === 'string' ? (
            <p>{item.answer}</p>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  item.answer?.root?.children
                    ?.map(
                      (node) => node.children?.map((child: any) => child.text || '').join('') || '',
                    )
                    .join('<br/>') || '',
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}

type FAQCategoryProps = {
  category: FAQCategory
}

// Component to display a single FAQ category with its questions
const FAQCategorySection = ({ category }: FAQCategoryProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  if (!category.faqs || category.faqs.length === 0) {
    return null
  }

  return (
    <div className={styles.faqCategory}>
      <h3 className={styles.categoryTitle}>{category.name}</h3>
      {category.description && <p className={styles.categoryDescription}>{category.description}</p>}

      <div className={styles.faqList}>
        {category.faqs.map((item) => (
          <FAQAccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            toggleOpen={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

// Props for the main FAQ component
type FAQProps = {
  categoryId?: string
  isGeneral?: boolean
  limit?: number
  title?: string
  description?: string
}

// Main FAQ component that can be reused across different pages
export default function FAQ({
  categoryId,
  isGeneral = false,
  limit,
  title,
  description,
}: FAQProps) {
  const { loading, error, categories } = useFAQData({
    categoryId,
    isGeneral,
    limit,
  })

  if (loading) {
    return <div className={styles.loading}>Loading FAQs...</div>
  }

  if (error) {
    return <div className={styles.error}>Error loading FAQs: {error}</div>
  }

  if (categories.length === 0) {
    return <div className={styles.empty}>No FAQs available.</div>
  }

  return (
    <div className={styles.faqContainer}>
      {title && <h2 className={styles.faqTitle}>{title}</h2>}
      {description && <p className={styles.faqDescription}>{description}</p>}

      {categories.map((category) => (
        <FAQCategorySection key={category.id} category={category} />
      ))}
    </div>
  )
}
