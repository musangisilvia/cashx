import "../styles/DashboardNewsList.css";

import DashboardNewsItem from "./DashboardNewsItem";

const DashBoardNewsList = () => {
  return (
    <div className="dashboard-news-list">
      <h4>Trending News</h4>
      <DashboardNewsItem />
      <DashboardNewsItem />
      <DashboardNewsItem />
    </div>
  );
};
export default DashBoardNewsList;
