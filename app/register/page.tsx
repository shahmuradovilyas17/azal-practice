"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useStateContext } from "../Components/context";
import "./page.scss";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUserData } = useStateContext();

  const onSubmit = (data) => {
    console.log(data);
    setUserData(data);
    router.push("/login");
  };

  return (
    <div className="register-page-wrapper">
      <div className="bg-blue-100 rounded-[15px] p-10" id="register-page-inner">
        <div className="register-page-title">Qeydiyyat</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register-section">
            <label htmlFor="login">Login</label>
            <input
              id="login"
              type="text"
              placeholder="Login"
              {...register("login", {
                required: "Login is required",
                minLength: {
                  value: 6,
                  message: "Login must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*\d).+$/,
                  message: "Login must contain at least one digit",
                },
              })}
              className={`register-input ${errors.login ? "input-error" : ""}`}
            />
            {errors.login && (
              <p className="error-message">{errors.login.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="name">Ad</label>
            <input
              id="name"
              type="text"
              placeholder="Ad"
              {...register("name", { required: "Ad tələb olunur" })}
              className={`register-input ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email tələb olunur",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`register-input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="register-section">
            <label htmlFor="password">Şifrə</label>
            <input
              id="password"
              type="password"
              placeholder="Şifrə"
              {...register("password", {
                required: "Şifrə tələb olunur",
                minLength: {
                  value: 8,
                  message: "Şifrə ən azı 8 simvoldan ibarət olmalıdır",
                },
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Şifrə ən azı 1 hərif bir rəqəm və bir xüsusi simvoldan ibarət olmalıdır",
                },
              })}
              className={`register-input ${
                errors.password ? "input-error" : ""
              }`}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#97ba1e] text-white "
            id="register-input-button"
          >
            Qeydiyyatdan keç
          </button>
        </form>
      </div>
    </div>
  );
}
