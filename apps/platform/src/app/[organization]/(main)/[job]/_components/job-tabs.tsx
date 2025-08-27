"use client";

import { Tabs } from "@ophelia/ui";
import { usePathname } from "next/navigation";

interface JobTabsProps {
  basePath: string;
}

export function JobTabs({ basePath }: JobTabsProps) {
  const pathname = usePathname();

  const isOverview = pathname === basePath;
  const isApplicants = pathname === `${basePath}/applicants`;
  const isSettings = pathname === `${basePath}/settings`;

  return (
    <Tabs.Root>
      <Tabs.Item as="a" active={isOverview} href={basePath}>
        Overview
      </Tabs.Item>
      <Tabs.Item as="a" active={isApplicants} href={`${basePath}/applicants`}>
        Applicants
      </Tabs.Item>
      <Tabs.Item as="a" active={isSettings} href={`${basePath}/settings`}>
        Settings
      </Tabs.Item>
    </Tabs.Root>
  );
}
