import MainBodyProductDetail from "../components/layout/MainBodyProductDetail";
import PageLayout from "../components/layout/PageLayout";
import fetchApi from "../components/utilities/fetchApi";

const ProductDetail = ({ singleProductData }) => {
  return (
    <PageLayout>
      <MainBodyProductDetail
        productData={singleProductData ? singleProductData : {}}
      />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const fetchAllProducts = await fetchApi.get("/products/productslugs");

  const allProductsData = fetchAllProducts.data?.payload?.data?.products;

  const productParams = allProductsData.map((product) => ({
    params: { pSlug: product.productSlug },
  }));

  return {
    paths: productParams,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const fetchSingleProduct = await fetchApi.get(`/products/${params.pSlug}`);

  const singleProductData = fetchSingleProduct.data?.payload?.data?.product;
  return {
    props: {
      singleProductData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
}

export default ProductDetail;
