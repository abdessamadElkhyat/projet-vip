// pages/Article.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data/articles.json";

export default function Article() {
  const { id } = useParams();
  const article = data[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!article) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Article not found!
      </h2>
    );
  }

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % article.images.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (currentIndex - 1 + article.images.length) % article.images.length
    );
  };

  return (
    <div>
      <div className="ads">Top Advertisement</div>

      <div className="article-title">{article.title}</div>

      <div className="gallery">
        <img
          id="galleryImage"
          src={article.images[currentIndex]}
          alt="Article"
        />
        <div className="gallery-buttons">
          <button onClick={prevPhoto}>Previous Photo</button>
          <button onClick={nextPhoto}>Next Photo</button>
        </div>
      </div>

      <div className="ads small">Small Advertisement</div>

      <div className="article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
}
