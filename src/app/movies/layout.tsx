import Header from "@/components/layout/header/header";

const MovieLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MovieLayout;
