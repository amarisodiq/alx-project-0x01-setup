import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Posts Page</h1>
        <p>This is the posts page content.</p>
      </main>
    </div>
  )
}

export default Posts;