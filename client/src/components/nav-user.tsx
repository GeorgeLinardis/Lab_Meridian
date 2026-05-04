"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import axios from '@/lib/axios';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { ChevronsUpDownIcon, LogOutIcon, SettingsIcon, User } from 'lucide-react';
import { API } from '@/api-urls';
import { ROUTES } from '@/routes';
import { useRouter } from 'next/navigation';

export function NavUser({
  user,
}: {
  // TODO optional remove when implemented
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
}) {
  const { isMobile } = useSidebar();
  const router = useRouter();
  async function handleLogout() {
    await axios.post(API.AUTH.LOGOUT);
    router.push(ROUTES.LOGIN);
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="default" className="hover:bg-[oklch(0.93_0.04_280)] aria-expanded:bg-[oklch(0.93_0.04_280)]" />
            }
          >
            <User className="size-4 shrink-0" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user?.name}</span>
              <span className="truncate text-xs">{user?.email}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={14}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer gap-2 hover:bg-[oklch(0.93_0.04_280)] focus:bg-[oklch(0.93_0.04_280)]">
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer gap-2 hover:bg-[oklch(0.93_0.04_280)] focus:bg-[oklch(0.93_0.04_280)]" onClick={handleLogout}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
