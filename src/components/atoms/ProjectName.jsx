import { Link } from "react-router-dom";

export default function ProjectName({ title, desc, image, index }) {
  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl relative">
      {/* object-fit: cover */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="projectImg"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <Link
        to={`/portfolio/${
          index + 1
        }?title=${title}&desc=${desc}&image=${image}`}
      >
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full ${
            colors[index % colors.length]
          }`}
        ></button>
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full ${
            colors[index % colors.length]
          }`}
        >
          {/* index를 배열의 길이로 나누어 나머지 값을 출력 */}
        </button>
      </Link>
    </li>
  );
}
