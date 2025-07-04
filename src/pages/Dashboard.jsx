// pages/Dashboard.tsx or wherever used
import DashboardLayout from "../layouts/DashboardLayout";
import AutomationList from "../components/AutomationList";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <AutomationList />
    </DashboardLayout>
  );
}
