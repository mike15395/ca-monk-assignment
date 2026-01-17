import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from './ui/item'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { calculateTime } from '@/utils/calculateTime'
import { Separator } from './ui/separator'

function AllBlogs() {
    const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3001/blogs').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)

  return (
    <section>
        <ScrollArea  className="h-150 w-100 rounded-md border">
      {data?.map(({id,title,description,category,date})=><Item key={id}>
        <ItemHeader className='flex justify-between'>
            <div className='flex gap-2'>{category.map((ele)=><Badge variant={'outline'}>{ele}</Badge>)}</div>
            <div>{calculateTime(date)}<span> days ago</span></div>
        </ItemHeader>
        <ItemContent>
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
        </ItemContent>
      </Item>)}
      </ScrollArea>
    </section>
  )
}

export default AllBlogs