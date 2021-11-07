import "../styles/DashboardNewsItem.css";

const DashboardNewsItem = ({ blog }) => {
  return (
    <div className="dashboard-news-item">
      <img
        className="news-card-img-top"
        src={blog.image}
        alt="news-item"
      />

      <div className="news-card-body">
        <p className="card-text">{blog.headline}</p>
      </div>
    </div>

  );
};

export default DashboardNewsItem;
