import React from "react";
import MyAccountsDashboard from "@/components/MyAccountsDashboard";

export const metadata = {
  title: "My Accounts & Subscriptions | PLUMO Digital",
  description: "View and manage your active AI accounts, credentials, and renewal status.",
};

export default function MyAccountsPage() {
  return <MyAccountsDashboard />;
}
