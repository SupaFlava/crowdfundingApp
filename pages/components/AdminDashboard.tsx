import React from "react";
import { withAdminAuth } from "../utils/withAdminAuth";

function AdminDashboard() {
  return (
    <div>
      <h1>Hello this is the Admin dash</h1>
    </div>
  );
}

export default withAdminAuth({ children: <AdminDashboard /> });
