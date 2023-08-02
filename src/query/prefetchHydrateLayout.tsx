import getQueryClient from "@/query/getQueryClient";
import { Hydrate, QueryKey, dehydrate } from "@tanstack/react-query";
import React from "react";

interface IProps {
  children: React.ReactNode;
  queryKey: QueryKey;
  queryFn: () => Promise<any>;
}

export const ListPrefetchHydrateLayout = async ({ children, queryKey, queryFn }: IProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
