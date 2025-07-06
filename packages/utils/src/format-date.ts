import { formatDistanceToNow } from 'date-fns';

export const getRelativeTime = (date: Date, capitalize?: boolean): string => {
  const result = formatDistanceToNow(date, { addSuffix: true });
  
  if (capitalize && result.length > 0) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  
  return result;
};
