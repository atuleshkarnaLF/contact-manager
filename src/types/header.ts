export interface NavbarPageProps {
  name: string;
  link: string;
  isActive?: string;
}
export interface HeaderProps {
  navbarPages: NavbarPageProps[];
}
