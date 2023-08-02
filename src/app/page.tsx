import { ListPrefetchHydrateLayout } from "@/query/prefetchHydrateLayout";
import { List } from "./list";
import { getMovieList } from "@/services/api";
import { QK_Movie_Popular } from "@/query/queryKey";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ListPrefetchHydrateLayout
        queryKey={[...QK_Movie_Popular, "1"]}
        queryFn={() => getMovieList({ page: 1 })}
      >
        <List />
      </ListPrefetchHydrateLayout>
    </>
  );
}
