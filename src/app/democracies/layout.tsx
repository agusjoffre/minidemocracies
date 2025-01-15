import { DemocracySidebar } from "@/components/democracy/sidebar";

type Props = {};

const DemocracyLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex flex-col md:flex-row gap-14 px-2 lg:px-24 py-8">
      <DemocracySidebar />
      {children}
    </main>
  );
};

export default DemocracyLayout;
