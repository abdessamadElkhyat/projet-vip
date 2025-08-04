// pages/Home.jsx
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import data from "../data/articles.json";
import "../style.css";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );

  const articlesPerPage = 9;

  // نحولو object -> array ونقلبو الترتيب
  const reversedData = Object.entries(data).reverse();
  const totalPages = Math.ceil(reversedData.length / articlesPerPage);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const pagedArticles = reversedData.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div>
      <div className="ads">Advertisement Space</div>

      <section className="articles">
        {pagedArticles.map(([id, article]) => (
          <div className="article-card" key={id}>
            <Link to={`/article/${id}`}>
              <img src={article.images[0]} alt={article.title} />
              <h3>{article.title}</h3>
            </Link>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && (
          <button
            className="page-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${i + 1 === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            className="page-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
}
