interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div className="rounded-lg bg-black-0 px-6 py-3 leading-6 font-semibold text-grey-50">
      {children}
    </div>
  );
};
export default Button;
