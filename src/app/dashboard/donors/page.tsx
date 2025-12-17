import { DonorsTable } from "@/components/dashboard/donors-table";
import { donors } from "@/lib/data";

export default function DonorsPage() {
  return (
    <div data-aos="fade-up">
      <DonorsTable data={donors} />
    </div>
  );
}
