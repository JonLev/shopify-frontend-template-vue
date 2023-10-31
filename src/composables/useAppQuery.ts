import { useAuthenticatedFetch } from './useAuthenticatedFetch';
import { useQuery } from '@tanstack/vue-query';

import type { UseQueryOptions } from '@tanstack/vue-query';

/**
 * A hook for querying your custom app data.
 * @desc A thin wrapper around useAuthenticatedFetch and react-query's useQuery.
 *
 * @param {Object} options - The options for your query. Accepts 3 keys:
 *
 * 1. url: The URL to query. E.g: /api/widgets/1`
 * 2. fetchOptions: The init options for fetch.  See: https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
 * 3. queryOptions: The options for `useQuery`. See: https://tanstack.com/query/latest/docs/vue/overview
 *
 * @returns Return value of useQuery.  See: https://tanstack.com/query/latest/docs/vue/guides/queries.
 */
export const useAppQuery = ({ url, fetchOptions = {}, queryOptions }: { url: string, fetchOptions: any, queryOptions: UseQueryOptions }) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const fetch = async () => {
    const response = await authenticatedFetch(url, fetchOptions);
    return response.json();
  };

  return useQuery({
    ...queryOptions,
    queryFn: fetch,
    refetchOnWindowFocus: false,
  });
};