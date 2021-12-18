import { useRouter } from "next/router";
import PageLayout from "../../components/layout/PageLayout";
import MainBodySearchPage from "../../components/layout/MainBodySearchPage";

const Search = () => {
  const router = useRouter();
  const queryText = router.query.q || "";

  return (
    <PageLayout>
      <MainBodySearchPage />
    </PageLayout>
  );
};

export default Search;
