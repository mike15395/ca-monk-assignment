export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);
  
  return date.toLocaleDateString('en-US', {
    month: 'short',  // Jan, Feb, Mar...
    day: 'numeric',  // 17
    year: 'numeric'  // 2026
  });
};


