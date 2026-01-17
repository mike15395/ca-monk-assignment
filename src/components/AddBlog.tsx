import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";

export default function AddBlog() {

  const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  coverImage: z.string().url('Must be a valid URL'),
  category: z.array(z.string()).min(1, 'Select at least one category'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
});

  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      description: '',
      coverImage: '',
      category: [],
      content: '',
    },
  });

  const selectedCategories = watch('category');

  const mutation = useMutation({
    mutationFn: (data) =>
      fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, date: new Date().toISOString() }),
      }).then((res) => res.json()),
    onSuccess: () => {
     
      queryClient.invalidateQueries({ queryKey: ['repoData'] });
      reset();
      setOpen(false);
    },
  });

  const onSubmit = async (data:any) => {
  toast.promise(
    mutation.mutateAsync(data),
    {
      loading: "Creating blog...",
      success: "Blog created successfully",
      error: "Failed to create blog",
    }
  );
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className='cursor-pointer'>+ New Blog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Blog</DialogTitle>
          <DialogDescription>Fill out the form below</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 min-w-full">
          
          <div className='flex flex-col gap-2 '>
            <Label>Title</Label>
            <Input {...register('title')} />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className='flex flex-col gap-2 '>
            <Label>Description</Label>
            <Input {...register('description')} />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className='flex flex-col gap-2 '>
            <Label>Image URL</Label>
            <Input {...register('coverImage')} />
            {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage.message}</p>}
          </div>

          <div className='flex flex-col gap-2 '>
            <Label>Categories</Label>
            <div className="flex flex-wrap justify-between  border p-2 rounded">
              {['TECH', 'FINANCE', 'LIFESTYLE', 'CAREER', 'REGULATIONS'].map((cat) => (
                <label key={cat} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...selectedCategories, cat]
                        : selectedCategories.filter((c) => c !== cat);
                      setValue('category', updated);
                    }}
                  />
                  {cat}
                </label>
              ))}
            </div>
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          <ScrollArea className='w-full h-22'>
            <div className='flex flex-col gap-2 '>
              <Label>Content</Label>
              <Textarea {...register('content')} rows={5} />
              {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            </div>
          </ScrollArea>

          <DialogFooter>
            <Button type="button" variant="outline" className='cursor-pointer' onClick={() => {setOpen(false) ;reset()}}>
              Cancel
            </Button>
            <Button type="submit" className='cursor-pointer' variant={'outline'} disabled={mutation.isPending}>
              {mutation.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

