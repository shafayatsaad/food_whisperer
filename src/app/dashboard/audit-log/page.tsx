import { AuditLogTable } from "@/components/dashboard/audit-log-table";
import { auditLogs } from "@/lib/data";

export default function AuditLogPage() {
  return (
    <div data-aos="fade-up">
      <AuditLogTable data={auditLogs} />
    </div>
  );
}
