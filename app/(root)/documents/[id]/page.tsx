import CollaborativeRoom from "@/components/CollaborativeRoom";


const Document = ({params:{id}}: SearchParamProps) => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId= {id}/>
    </main>
  );
};

export default Document;
