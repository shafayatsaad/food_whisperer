
"use client";

import { DataTable } from "@/components/dashboard/data-table";
import type { Shelter } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const columns: {
  accessorKey: keyof Shelter;
  header: string;
  cell: (info: { row: Shelter }) => React.ReactNode;
}[] = [
  {
    accessorKey: "shelterName",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.avatar} alt={row.shelterName} />
          <AvatarFallback>{row.shelterName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{row.shelterName}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
    cell: ({ row }) => (
      <div className="hidden w-[150px] sm:table-cell">
        <Progress value={row.capacity} className="h-2" />
        <span className="text-xs text-muted-foreground">{row.capacity}% full</span>
      </div>
    ),
  },
  {
    accessorKey: "population",
    header: "Population",
    cell: ({ row }) => (
      <div className="hidden text-right md:table-cell">{row.population}</div>
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
    accessorKey: "lastDonation",
    header: "Last Donation",
    cell: ({ row }) => (
      <div className="hidden lg:table-cell">{row.lastDonation}</div>
    ),
  },
];

export function SheltersTable({ data }: { data: Shelter[] }) {
    return <DataTable columns={columns} data={data} />;
}
