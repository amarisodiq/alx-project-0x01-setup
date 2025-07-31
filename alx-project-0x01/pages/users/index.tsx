import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Users Page</h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <UserCard key={post.id} post={post} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  <div className="bg-red-300 p-4">Box 1</div>
  <div className="bg-blue-300 p-4">Box 2</div>
</div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
