import { useGetProfileQuery } from '../generated/graphql';

export default function useFetchProfile(id: number, skip: boolean) {
  console.log(skip);
  return useGetProfileQuery({
    variables: {
      user_id: id,
    },
    skip: skip,
  });
}
