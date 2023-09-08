"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setName } from "../store/user-slice";
import Link from "next/link";

interface RoleUser {
  role: "admin" | "user";
}

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setUserName] = React.useState("");
  const [role, setRole] = React.useState<RoleUser["role"]>("user");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      setName({
        name: userName,
        role: role,
      })
    );

    if (
      (role === "admin" && userName === "admin") ||
      userName === "master" ||
      userName === "suporte"
    ) {
      router.push("/home");
    }

    if (role === "user" && userName !== "") {
      router.push("/home");
    }
  };
  return (
    <main className="flex min-h-screen flex-row items-center justify-start sm:flex-col">
      <aside className="flex flex-col items-center justify-center bg-black w-96 h-screen sm:h-32 sm:w-full">
        <h1 className="text-4xl text-white font-bold">Help Desk</h1>
      </aside>
      <section className="flex flex-col items-center justify-center w-full h-full sm:w-full">
        <h1 className="text-3xl sm:text-xl text-black font-bold py-3 uppercase">
          Login
        </h1>
        <form
          className="flex flex-col items-center justify-center bg-white sm:w-full sm:h-full"
          onSubmit={handleLogin}
        >
          <input
            className="border-2 border-gray-300 w-80 h-10 sm:w-64 rounded-lg px-4"
            type="text"
            placeholder="Usuário"
            onChange={(event) => setUserName(event.target.value)}
          />
          <select
            className="border-2 border-gray-300 w-80 h-10 sm:w-64 rounded-lg px-4"
            onChange={(event) =>
              setRole(event.target.value as RoleUser["role"])
            }
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>

          <button
            className="border-2 border-gray-300 w-80 h-10 sm:w-64 rounded-lg px-4"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
