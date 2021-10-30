import React, { ReactElement, useEffect, useState } from 'react'

type Items = {
  url: string
  title: string
  items?: Array<Items>
}

type Props = {
  items: Array<Items>
}

const TableOfContents = ({ items }: Props): ReactElement => {
  const itemsIds = getIdsFromItems(items)
  const activeId = useActiveId(itemsIds)
  return (
    <div className="xl:fixed text-gray-400 text-sm tracking-wider my-12 xl:my-0 xl:top-44 xl:right-24">
      <div className="pl-4 pb-6 font-bold">TABLE OF CONTENTS</div>
      {renderItems(items, activeId)}
    </div>
  )
}

const renderItems = (items: Array<Items>, activeId: string): ReactElement => (
  <ol>
    {items.map(item => (
      <li key={item.url} className="pl-4 py-2">
        <a
          href={item.url}
          className={
            activeId === item.url.slice(1) ? 'text-teal-100 underline' : ''
          }
        >
          {item.title}
        </a>
        {item.items && renderItems(item.items, activeId)}
      </li>
    ))}
  </ol>
)

const getIdsFromItems = (items: Array<Items>) => {
  return items.reduce((acc: Array<string>, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIdsFromItems(item.items))
    }
    return acc
  }, [])
}

const useActiveId = (itemsIds: Array<string>) => {
  const [activeId, setActiveId] = useState('')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    },
    {
      rootMargin: `0% 0% -90% 0%`,
    }
  )

  useEffect(() => {
    itemsIds.forEach(id => {
      observer.observe(document.getElementById(id)!)
    })
    return () => {
      itemsIds.forEach(id => {
        observer.unobserve(document.getElementById(id)!)
      })
    }
  }, [itemsIds])

  return activeId
}

export default TableOfContents
