import useFetch from "../helpers/useFetch";

import "../styles/DashboardNewsList.css";

import DashboardNewsItem from "./DashboardNewsItem";

const DashBoardNewsList = () => {

  const {data: blogs, isPending, error} = useFetch('http://localhost:5000/api/news')

  return (
    <div className="dashboard-news-list">
      <h4>Trending News</h4>
      {/* Conditional Rendering */}
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {
        blogs && 
          blogs.map((blog) => (<DashboardNewsItem key={blog.id} blog={ blog }/>))
      }
        
    </div>
  );
};
export default DashBoardNewsList;
