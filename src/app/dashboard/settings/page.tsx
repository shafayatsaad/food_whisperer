import { EquityScoreOptimizer } from "@/components/dashboard/equity-score-optimizer";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <>
      <Separator />
      <div data-aos="fade-up" data-aos-delay="100">
        <EquityScoreOptimizer />
      </div>
    </>
  );
}
