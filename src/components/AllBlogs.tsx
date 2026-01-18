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
    <section  className='w-full sm:w-auto px-2'>
        <ScrollArea  className="w-full max-w-full h-[70vh] sm:h-[85vh] rounded-md  p-2 overflow-x-hidden">
          
        {isListPending &&
          Array.from({ length: 6 }).map((_, index) => (
            <CardLoader key={index} />
          ))}

      {!isListPending && blogs?.map(({id,title,description,category,date})=>
      <Item onClick={()=>setBlogId(id)} key={id} className='cursor-pointer bg-white p-4 mb-4 hover:scale-105'>
        <ItemHeader className='flex justify-between'>
            <div className='flex gap-2'>{category && category?.map((ele)=><Badge variant={'outline'} className='text-white bg-gray-500'>{ele}</Badge>)}</div>
            <div className='text-gray-500'>{calculateTime(date)}<span> days ago</span></div>
        </ItemHeader>
        <ItemContent>
            <ItemTitle className='text-xl'>{title}</ItemTitle>
            <ItemDescription className='text-gray-700'>{description}</ItemDescription>
        </ItemContent>
      </Item>)}
      </ScrollArea>
    </section>
  )
}

export default AllBlogs