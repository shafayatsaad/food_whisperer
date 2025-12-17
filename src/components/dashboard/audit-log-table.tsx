"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/components/dashboard/data-table";
import type { AuditLog } from "@/lib/types";

const columns = (
  isClient: boolean
): {
  accessorKey: keyof AuditLog;
  header: string;
  cell: (info: { row: AuditLog }) => React.ReactNode;
}[] => [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => (
      <div>
        {isClient ? new Date(row.timestamp).toLocaleString() : new Date(row.timestamp).toISOString()}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <div className="font-medium">{row.action}</div>,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => <div className="hidden sm:table-cell">{row.user}</div>,
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => <div className="hidden md:table-cell">{row.details}</div>,
  },
  {
    accessorKey: "needScore",
    header: "Need Score",
    cell: ({ row }) => (
      <div className="text-right">{row.needScore ?? "N/A"}</div>
    ),
  },
];

export function AuditLogTable({ data }: { data: AuditLog[] }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <DataTable columns={columns(isClient)} data={data} />;
}
