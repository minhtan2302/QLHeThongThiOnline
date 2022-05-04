import { createContext, useState } from "react";
import avatarAdmin from "../assets/img/admin.png";

export const adminContext = createContext({});

export function ProviderAuth({ children }) {
  const [adminInfo, setAdminInfo] = useState({
    username: "admin@gmail.com",
    password: "Admin123",
    name: "Admin",
    avatar: avatarAdmin,
    isLoggin: false,
  });
  return (
    <adminContext.Provider value={{ adminInfo, setAdminInfo }}>
      {children}
    </adminContext.Provider>
  );
}
