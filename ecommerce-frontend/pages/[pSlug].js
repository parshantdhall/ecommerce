import MainBodyProductDetail from "../components/layout/MainBodyProductDetail";
import PageLayout from "../components/layout/PageLayout";
import fetchApi from "../components/utilities/fetchApi";

const ProductDetail = ({ singleProductData }) => {
  const { product: productData } = singleProductData.payload.data;

  console.dir(productData);
  return (
    <PageLayout>
      <MainBodyProductDetail productData={productData} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const fetchAllProducts = await fetchApi.get("/products");

  const allProductsData = fetchAllProducts.data?.payload?.data?.products;

  const productParams = allProductsData.map((product) => ({
    params: { pSlug: product.productSlug },
  }));

  console.log(productParams);

  return {
    paths: productParams,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const fetchSingleProduct = await fetchApi.get(`/products/${params.pSlug}`);

  const singleProductData = fetchSingleProduct.data;

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
