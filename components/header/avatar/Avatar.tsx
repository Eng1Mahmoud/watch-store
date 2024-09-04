import Image from "next/image";
import avatar from "@/public/assets/avatar.jpg";
import { getUser } from "./getUser";
const Avatar = async () => {
  const user: any = await getUser();
  console.log(user);
  return (
    <>
      {user?.data ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <Image
                alt="avatar"
                src={avatar}
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3000000000000000000] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Avatar;
