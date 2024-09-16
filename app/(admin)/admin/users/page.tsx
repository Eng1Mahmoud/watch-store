"use client";
import React from "react";
import BaseTable from "@/components/tables/BaseTable";

const MyComponent: React.FC = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "created_at", label: "Created At" },
    { key: "updated_at", label: "Updated At" },
    { key: "status", label: "Status" },
  ];

  const actions = [
    {
      label: "Edit",
      onClick: (item: any) => {
        // Add your edit logic here
      },
    },
    {
      label: "Delete",
      onClick: (item: any) => {
        // Add your delete logic here
      },
    },
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-bold pb-4 text-main-main">Users</h1>
      <BaseTable
        columns={columns}
        endpoint="/api/users"
        actions={actions}
        itemsPerPage={20}
        dataName="users"
        tags={["users"]}
      />
    </div>
  );
};

export default MyComponent;
