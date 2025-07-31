import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ post: UserProps }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border hover:shadow-lg transition">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
          {post.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {post.name}
          </h2>
          <p className="text-sm text-gray-500">@{post.username}</p>
        </div>
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <p>
          <strong>Email:</strong> {post.email}
        </p>
        <p>
          <strong>Phone:</strong> {post.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${post.website}`}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.website}
          </a>
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${post.address.street}, ${post.address.suite}, ${post.address.city}`}
        </p>
        <p>
          <strong>Company:</strong>{" "}
          {`${post.company.name} - "${post.company.catchPhrase}"`}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
