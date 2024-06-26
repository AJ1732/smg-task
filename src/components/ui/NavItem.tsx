interface Props {
  children: React.ReactNode;
}

const NavItem = ({ children }: Props) => {
  return (
    <span className="font-bold cursor-default text-gray-500 transition-all p-2 duration-500 hover:text-secondary-100">
      {children}
    </span>
  );
};
export default NavItem;
