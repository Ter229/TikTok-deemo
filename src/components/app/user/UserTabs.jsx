import React, { useState } from "react";
import { USER_TABS } from "../../../../utils/constants";
import LockIcon from "@mui/icons-material/Lock";
import { Alert } from "@mui/material";

const UserTabs = ({ openFavorite }) => {
  const [activeTab, setActiveTab] = useState(USER_TABS[0]);
  return (
    <div>
      <ul>
        {USER_TABS.map((tab) => {
          const { slug, title, content } = tab;
          return (
            <li
              className={`flex flex-center ${
                activeTab.slug === slug ? "active" : ""
              }`}
              key={slug}
              onClick={() => setActiveTab(tab)}
            >
              {!openFavorite && slug === "liked" && <LockIcon />}
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        {!openFavorite && activeTab.slug === "liked" ? (
          <Alert severity="warning">This users liked videos are private </Alert>
        ) : (
          activeTab.content
        )}
      </div>
    </div>
  );
};

export default UserTabs;
