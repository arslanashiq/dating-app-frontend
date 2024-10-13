import { Route, Routes } from "react-router-dom";

// pages
import { CustomPage, PageNotFound } from "@/containers";
import PrivateLayout from "@/layouts/private";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="" index element={<CustomPage />} />
          <Route path="public" element={<CustomPage />} />
          <Route path="private" element={<PrivateLayout />}>
            <Route path="" index element={<CustomPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
