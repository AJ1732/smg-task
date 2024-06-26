interface Props {
  children: React.ReactNode;
}

const NavItem = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default NavItem;
