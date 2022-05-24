import { useState } from "react";
import ActiveTab from "./ActiveTab";
import GainersTab from "./GainersTab";
import LosersTab from "./LosersTab";

import useAuthFetch from "../helpers/useAuthFetch";
import "../styles/Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const { data, isPending, error } = useAuthFetch("api/stocks");

  return (
    <div className="tabs">
      {/* Tab nav */}
      <ul className="tabs-nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Most Active
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Gainers
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Losers
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <ActiveTab data={data} isPending={isPending} error={error} />
        ) : (
          ""
        )}
        {activeTab === "tab2" ? (
          <GainersTab data={data} isPending={isPending} error={error} />
        ) : (
          ""
        )}
        {activeTab === "tab3" ? (
          <LosersTab data={data} isPending={isPending} error={error} />
        ) : (
          ""
        )}
        {/* Content will be shown here */}
      </div>
    </div>
  );
};

export default Tabs;
