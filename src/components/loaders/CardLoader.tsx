import React from 'react'
import { Skeleton } from '../ui/skeleton'

function CardLoader() {
  return (
     <div className="flex items-center  p-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-100" />
        <Skeleton className="h-4 w-100" />
        <Skeleton className="h-6 w-100" />
      </div>
    </div>
  )
}

export default CardLoader