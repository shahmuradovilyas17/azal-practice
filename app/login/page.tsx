"use client";
import React from "react";
import { useStateContext } from "../Components/context";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import "./page.scss";
import Link from "next/link";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userData, setUserLogged, UserLogged } = useStateContext();
  const router = useRouter();

  const onSubmit = (data) => {
    if (
      userData &&
      (data.loginOrEmail === userData.login ||
        data.loginOrEmail === userData.email) &&
      data.password === userData.password
    ) {
      alert("Login successful!");
      setUserLogged((prevState) => {
        return !prevState;
      });
      router.push("/profile");
      localStorage.setItem("userLogged", UserLogged);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="bg-blue-100 rounded-[15px] p-10" id="login-page-inner">
        <div className="login-page-title">Hesaba daxil ol</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-section">
            <label htmlFor="loginOrEmail">Login və ya Mail</label>
            <input
              id="loginOrEmail"
              type="text"
              placeholder="Login və ya Mail"
              {...register("loginOrEmail", {
                required: "Login və ya Mail tələb olunur",
              })}
              className={`login-input ${
                errors.loginOrEmail ? "input-error" : ""
              }`}
            />
            {errors.loginOrEmail && (
              <p className="error-message">{errors.loginOrEmail.message}</p>
            )}
          </div>
          <div className="login-section">
            <label htmlFor="password">Şifrə</label>
            <input
              id="password"
              type="password"
              placeholder="Şifrə"
              {...register("password", { required: "Şifrə tələb olunur" })}
              className={`login-input ${errors.password ? "input-error" : ""}`}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-2xl border-1 border-black rounded-[15px] p-3 bg-[#97ba1e] text-white"
            id="login-input-button"
          >
            Daxil ol
          </button>
        </form>
        <div>
          <div className="text-black text-2xl mb-5">Hesabınız yoxdur?</div>
          <Link href="./register" className="inline-block">
            <div className="text-2xl border-1 border-black rounded-[15px] p-3 bg-[#97ba1e] text-white">
              Hesab yaratmaq
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
