import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from './ui/item'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { calculateTime } from '@/utils/calculateTime'
import CardLoader from './loaders/CardLoader'


function AllBlogs({blogId,setBlogId}) {


    const { isPending:isListPending, error:listError, data:blogs } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3001/blogs').then((res) =>
        res.json(),
      ),
  })


    

  if (listError) return 'An error has occurred: ' + listError.message



  return (
    <section >
        <ScrollArea  className="h-150 w-100 rounded-md border">
          
        {isListPending &&
          Array.from({ length: 6 }).map((_, index) => (
            <CardLoader key={index} />
          ))}

      {!isListPending && blogs?.map(({id,title,description,category,date})=>
      <Item onClick={()=>setBlogId(id)} key={id} className='cursor-pointer'>
        <ItemHeader className='flex justify-between'>
            <div className='flex gap-2'>{category && category?.map((ele)=><Badge variant={'outline'}>{ele}</Badge>)}</div>
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