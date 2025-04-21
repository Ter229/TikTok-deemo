import Feed from "../feed/Feed";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchFeed from "../search/SearchFeed";
import { User } from "./user/User";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/search" element={<SearchFeed />} />
      <Route path="/user/:uniqueId" element={<User />} />
    </Routes>
  );
};

export default AppRoutes;
