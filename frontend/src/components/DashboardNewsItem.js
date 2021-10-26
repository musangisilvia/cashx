import "../styles/DashboardNewsItem.css";

const DashboardNewsItem = ({ blog }) => {
  return (
    <div className="dashboard-news-item">
      <img
        className="news-card-img-top"
        src={blog.image}
        alt="news-item-image"
      />

      <div className="news-card-body">
        <p className="card-text">{blog.headline}</p>
      </div>
    </div>

    // <div class="card mt-3 dashboard-news-item">
    //   <img
    //     class="card-img-top"
    //     src="https://images.unsplash.com/photo-1596526131158-52be64dcc208?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
    //     alt="Card image cap"
    //   />
    //   <div class="card-body">
    //     <p class="card-text">All Facebook services down for 6 hours</p>
    //   </div>
    // </div>
  );
};

export default DashboardNewsItem;
