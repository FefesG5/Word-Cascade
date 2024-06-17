import WithAuth from "@/components/WithAuth/WithAuth";

const WordCascade: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Word Cascade Page</h1>
      {/* Add your Word Cascade feature components here */}
    </div>
  );
};

export default WithAuth(WordCascade);
