import { ProductProps } from "../../type";
import Banner from "./components/Banner";
import FacebookChat from "./components/FacebookChat";
import Products from "./components/Products";

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
      <FacebookChat />
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return {
    props: {
      productData,
    },
  };
};
