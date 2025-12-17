
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { rescues } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
  "In Progress": "secondary",
  Completed: "outline",
  Pending: "default",
  Cancelled: "destructive",
  Flagged: "destructive",
};

export function RecentRescues() {
  return (
    <div className="rounded-lg border border-white/10 bg-card/50 text-card-foreground shadow-sm backdrop-blur-xl backdrop-saturate-150">
      <CardHeader>
        <CardTitle className="font-headline">Recent Rescues</CardTitle>
        <CardDescription>
          A list of the most recent food rescue operations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Food Item</TableHead>
              <TableHead className="hidden sm:table-cell">Donor</TableHead>
              <TableHead className="hidden md:table-cell">Shelter</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rescues.slice(0, 5).map((rescue) => (
              <TableRow key={rescue.id}>
                <TableCell>
                  <div className="font-medium">{rescue.foodItem}</div>
                  <div className="text-sm text-muted-foreground">{rescue.quantity}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{rescue.donorName}</TableCell>
                <TableCell className="hidden md:table-cell">{rescue.shelterName}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={statusVariant[rescue.status] || "default"}
                    className={cn(
                      rescue.status === 'Completed' && 'border-secondary text-secondary',
                      rescue.status === 'In Progress' && 'bg-sky-500/10 border-sky-500/50 text-sky-500',
                    )}
                  >
                    {rescue.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </div>
  );
}
