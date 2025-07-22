import "./styles.css";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import CommentCard from "../../components/CommentCard";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="dsc-title dsc-pd20">
          <h2>Venha nos visitar</h2>
        </div>
        <section id="dsc-product-exhibition">
          <ProductCard />
          <ProductCard />
        </section>
        <section id="dsc-product-comments">
          <div className="dsc-title">
            <h2>O que estão dizendo</h2>
          </div>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </section>
      </main>
      <Footer/>
    </>
  );
}
