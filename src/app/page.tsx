"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setName } from "../store/user-slice";
import Loading from "@/components/Loading";

interface RoleUser {
  role: "admin" | "user";
}

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<RoleUser["role"]>("user");
  const [loading, setLoading] = useState(false);
  const admin = process.env.NEXT_PUBLIC_ADMIN;
  const master = process.env.NEXT_PUBLIC_MASTER;
  const suporte = process.env.NEXT_PUBLIC_SUPORTE;
  const user = process.env.NEXT_PUBLIC_USER;

  const passwrodAdmin = process.env.NEXT_PUBLIC_PASSWORD;

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      setName({
        name: userName,
        role: role,
      })
    );

    if (
      (role === admin || role === master || role === suporte) &&
      password === passwrodAdmin
    ) {
      router.push("/home");
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (role === "user" && userName !== "") {
        router.push("/home");
      }
    }, 2000);
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
          className="flex flex-col items-center justify-center sm:w-full sm:h-full gap-2"
          onSubmit={handleLogin}
        >
          <div className="gap-1 flex flex-row">
            <input
              className="border-2 border-gray-300 w-52 h-10 sm:w-64 rounded-lg px-4"
              type="text"
              placeholder="Entre com seu nome"
              onChange={(event) => setUserName(event.target.value)}
            />
            <select
              className="border-2 border-gray-300 w-32 h-10 sm:w-64 rounded-lg px-4"
              onChange={(event) =>
                setRole(event.target.value as RoleUser["role"])
              }
            >
              <option value="user">Usuário</option>
              <option value="admin">Suporte</option>
            </select>
          </div>

          <div className="w-full h-10">
            {role === "admin" && (
              <input
                className="border-2 border-gray-300 w-full h-10 sm:w-64 rounded-lg px-4"
                type="password"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            )}
          </div>

          <button
            className="w-40 h-12 sm:w-64 rounded-lg px-4 bg-black text-white"
            type="submit"
          >
            {loading ? <Loading /> : "Entrar"}
          </button>
        </form>
      </section>
    </main>
  );
}
