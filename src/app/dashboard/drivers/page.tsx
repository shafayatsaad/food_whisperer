import { DriversTable } from "@/components/dashboard/drivers-table";
import { drivers } from "@/lib/data";

export default function DriversPage() {
  return (
    <div data-aos="fade-up">
      <DriversTable data={drivers} />
    </div>
  );
}
