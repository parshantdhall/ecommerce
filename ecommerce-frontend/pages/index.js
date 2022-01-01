import MainBody from "../components/layout/MainBody";
import PageLayout from "../components/layout/PageLayout";
import fetchApi from "../components/utilities/fetchApi";

export default function Home({ productsData, categoriesData }) {
  return (
    <PageLayout>
      <MainBody productsData={productsData} categoriesData={categoriesData} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const allProducts = fetchApi.get("/products");
  const allCategories = fetchApi.get("/categories");

  const data = await Promise.all([allProducts, allCategories]);

  const [productRes, categoryRes] = data;

  const productsData = productRes.data;
  const categoriesData = categoryRes.data;

  return {
    props: {
      productsData,
      categoriesData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
}
