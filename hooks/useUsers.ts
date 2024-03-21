import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';


const useUsers =  () => {
    const { data, error, isLoading } = useSWR('/api/get_all_user/', fetcher)

    
  return (
    [data, error, isLoading ]
  )
}

export default useUsers