export interface SidebarItemProps {
    title: string;
    icon: {};
    path: string;
    nested?: SidebarItemProps[];
}