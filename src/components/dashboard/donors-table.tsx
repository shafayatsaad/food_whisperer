
"use client";

import { DataTable } from "@/components/dashboard/data-table";
import type { Donor } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const columns: {
  accessorKey: keyof Donor;
  header: string;
  cell: (info: { row: Donor }) => React.ReactNode;
}[] = [
  {
    accessorKey: "businessName",
    header: "Business Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.avatar} alt={row.businessName} />
          <AvatarFallback>{row.businessName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{row.businessName}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "standardSurplusType",
    header: "Surplus Type",
    cell: ({ row }) => <div className="hidden sm:table-cell">{row.standardSurplusType}</div>,
  },
  {
    accessorKey: "donations",
    header: "Donations",
    cell: ({ row }) => (
      <div className="hidden text-right md:table-cell">{row.donations}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={cn({
          "border-green-500/80 bg-green-500/10 text-green-700": row.status === "Active",
          "border-amber-500/80 bg-amber-500/10 text-amber-700": row.status === "Pending",
          "border-red-500/80 bg-red-500/10 text-red-700": row.status === "Inactive",
        })}
      >
        {row.status}
      </Badge>
    ),
  },
  {
    accessorKey: "pickupAddress",
    header: "Address",
    cell: ({ row }) => (
      <div className="hidden lg:table-cell">{row.pickupAddress}</div>
    ),
  },
];

export function DonorsTable({ data }: { data: Donor[] }) {
    return <DataTable columns={columns} data={data} />;
}
