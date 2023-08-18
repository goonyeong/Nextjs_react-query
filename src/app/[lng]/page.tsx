import { ListPrefetchHydrateLayout } from "@/query/prefetchHydrateLayout";
import { List } from "./list";
import { getMovieList } from "@/services/api";
import { QK_Movie_Popular } from "@/query/queryKey";
import { useTranslation } from "../i18n";

interface IProps {
  params: {
    lng: string;
  };
}

const Home = async ({ params: { lng } }: IProps) => {
  /** server page useTranslation */
  const { t } = await useTranslation(lng, ["common"]);
  console.log("server nexti18", t("menu1"));

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
};

export default Home;