interface Props {
  children: React.ReactNode;
}

const NavLink = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default NavLink;
