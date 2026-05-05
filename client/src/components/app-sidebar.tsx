"use client";

import * as React from 'react';
import { FlaskConicalIcon, LayoutDashboardIcon, LineChartIcon, WalletIcon } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import MeridianIcon from '@/components/meridian-icon';
import { APP_NAME } from '@/constants';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

const navItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: <LayoutDashboardIcon />,
    isActive: true,
  },
  { title: "Accounts", url: "#", icon: <WalletIcon /> },
  { title: "Portfolio", url: "#", icon: <LineChartIcon /> },
  { title: "Simulation", url: "#", icon: <FlaskConicalIcon /> },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="[&_svg]:size-8 hover:bg-transparent active:bg-transparent pointer-events-none">
              <MeridianIcon size={32} />
              <span className="text-base font-semibold translate-y-1">
                {APP_NAME}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
