import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api/ApiService';
import '../Styles/News.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactMarkdown from 'react-markdown';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [expandedNews, setExpandedNews] = useState([]); // State to track expanded items
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const itemsPerPage = 3; // Number of news items per page

  useEffect(() => {
    fetchNews()
      .then((response) => {
        console.log("Fetched data", response.data);
        setNewsData(response.data);
        setExpandedNews(new Array(response.data.length).fill(false)); // Initialize expandedNews array
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  const MarkdownRenderer = ({ content }) => {
    return <ReactMarkdown>{content}</ReactMarkdown>;
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const toggleReadMore = (index) => {
    setExpandedNews((prev) => {
      const newExpandedNews = [...prev];
      newExpandedNews[index] = !newExpandedNews[index];
      return newExpandedNews;
    });
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNews = newsData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < newsData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-container">
        {displayedNews.map((news, index) => (
          <div key={startIndex + index} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="news-meta">
                <span className="author">
                  <i className="fa fa-user"></i> {news.author}
                </span>
                <span className="date">
                  <i className="fa fa-calendar"></i> {news.date}
                </span>
              </div>
              <h3>{news.title}</h3>
              <MarkdownRenderer
                content={
                  expandedNews[startIndex + index]
                    ? news.body
                    : truncateText(news.body, 150)
                }
              />
              <button
                className="read-moree"
                onClick={() => toggleReadMore(startIndex + index)}
              >
                {expandedNews[startIndex + index] ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button" onClick={prevPage} disabled={currentPage === 0}>
          &lt;
        </button>
        <button className="nav-button" onClick={nextPage} disabled={endIndex >= newsData.length}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default News;
