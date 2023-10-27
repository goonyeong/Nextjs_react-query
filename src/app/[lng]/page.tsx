import { ListPrefetchHydrateLayout } from "@/query/prefetchHydrateLayout";
import { List } from "./list";
import { getMovieList, getPersonList } from "@/services/api";
import { QK_Movie_Popular, QK_Person_Popular } from "@/query/queryKey";
import { useTranslation } from "../i18n";

interface IProps {
  params: {
    lng: string;
  };
}

const Home = async ({ params: { lng } }: IProps) => {
  /** server page useTranslation */
  const { t } = await useTranslation(lng, ["common"]);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ListPrefetchHydrateLayout
        queryKey={[
          [...QK_Movie_Popular, "1"],
          [...QK_Person_Popular, "1"],
        ]}
        queryFn={[() => getMovieList({ page: 1 }), () => getPersonList({ page: 1 })]}
      >
        {t("menu1")}
        <List />
      </ListPrefetchHydrateLayout>
    </>
  );
};

export default Home;
