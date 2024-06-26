import WithAuth from "@/components/WithAuth/WithAuth";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const WordCascade: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>Welcome to the Word Cascade Page</h1>
      {/* Add your Word Cascade feature components here */}
    </DashboardLayout>
  );
};

export default WithAuth(WordCascade);
