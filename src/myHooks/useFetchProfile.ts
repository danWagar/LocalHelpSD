import { useGetProfileQuery } from '../generated/graphql';

export default function useFetchProfile(id: number, skip: boolean) {
  return useGetProfileQuery({
    variables: {
      user_id: id,
    },
    skip: skip,
  });
}
