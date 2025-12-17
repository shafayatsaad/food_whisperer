import { SheltersTable } from "@/components/dashboard/shelters-table";
import { shelters } from "@/lib/data";

export default function SheltersPage() {
  return (
    <div data-aos="fade-up">
      <SheltersTable data={shelters} />
    </div>
  );
}
