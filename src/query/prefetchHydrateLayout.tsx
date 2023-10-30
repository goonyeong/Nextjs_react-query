import getQueryClient from "@/query/getQueryClient";
import { HydrationBoundary, QueryKey, dehydrate } from "@tanstack/react-query";
import React from "react";

interface IProps {
  children: React.ReactNode;
  queryKeys: QueryKey[];
  queryFns: (() => Promise<any>)[];
}

export const PrefetchHydrateLayout = async ({ children, queryKeys, queryFns }: IProps) => {
  const queryClient = getQueryClient();

  const prefetchQueryArr = queryKeys.map((queryKey, idx) =>
    queryClient.prefetchQuery({ queryKey, queryFn: queryFns[idx] })
  );
  await Promise.all(prefetchQueryArr);

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};
