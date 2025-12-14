"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

/* ──────────────────────────────────────────────
   Types
────────────────────────────────────────────── */
type AuthMode = "login" | "register";

interface AuthSystemProps {
  initialMode?: AuthMode;
}

/* ──────────────────────────────────────────────
   Toggle mock mode (TURN OFF when backend ready)
────────────────────────────────────────────── */
const MOCK_MODE = true;

/* ──────────────────────────────────────────────
   Component
────────────────────────────────────────────── */
const AuthSystem: React.FC<AuthSystemProps> = ({
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [mode]);

  /* ──────────────────────────────────────────────
     Submit (Mock now, real later)
  ────────────────────────────────────────────── */
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    // 🧪 MOCK MODE (SAFE)
    if (MOCK_MODE) {
      setTimeout(() => {
        window.location.href = "http://localhost:3000/Student/dashboard";
      }, 600);
      return;
    }

    // 🔐 REAL AUTH WILL LIVE HERE LATER
  };

  interface InputModifiedProps {
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    showPassword?: boolean;
    onToggleShow?: () => void;
  }

  const ParallelogramInput: React.FC<InputModifiedProps> = ({
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    showPassword,
    onToggleShow,
  }) => {
    return (
      <div className="relative w-[383px] h-[48px]">
        {/* Floating Label */}
        <label
          className="
            absolute -top-2 left-5
            h-[18px]
            px-3
            bg-[#FFEB9C]
            text-[#1E1E1E]
            text-xs
            font-normal
            select-none
            flex items-center
            skew-x-[-12deg]
            z-20
          "
          style={{borderRadius: "6px"}}
        >
          <span className="skew-x-[12deg] leading-[18px]">
            {label}
          </span>
        </label>

        {/* Parallelogram container */}
        <div className="overflow rounded-[12px] h-full w-full">
          {/* Skewed box for parallelogram shape */}
          <div
            className="h-full w-full border border-[#1C252E]"
            style={{
              transform: "skewX(-15deg)",
              borderRadius: "12px",
              boxSizing: "border-box",
              position: "relative",
              background: "transparent",
            }}
          >
            {/* Content skewed back to normal inside */}
            <div
              style={{
                transform: "skewX(15deg)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
              }}
            >
              <input
                type={type === "password" && showPassword ? "text" : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-transparent outline-none flex-1 text-[12px] text-[#171717cc]"
                style={{ lineHeight: "18px" }}
              />
              {type === "password" && onToggleShow && (
                <button
                  type="button"
                  onClick={onToggleShow}
                  className="ml-2 text-[#171717cc]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "white" }}
    >
      <div className="w-full max-w-md mx-4">
       <div className="shadow-2xl overflow-hidden rounded-tl-4xl rounded-br-4xl"
     style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}>


          {/* ───────── Header ───────── */}
          <div
            className="flex items-center justify-between  w-full h-[68px] mb-8 "
            style={{
              background: "linear-gradient(90deg, #FFFFFF 20%, #FFF9E0 66.57%)",
            }}
          >
 
            {/* Image + Title container */}
            <div className="flex items-center gap-3">
              <img
                        src="/flower.svg"
                        alt="Flower"
                        className="object-contain h-20 w-20 relative"
                        style={{ top: "-3px" }} // moves image 4px up
                      />
              <h2
                className="font-bold text-[24px] leading-[36px]"
                style={{ fontFamily: "'Public Sans', sans-serif", color: "#1E1E1E" }}
              >
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="w-[90px] h-[36px] font-semibold text-sm flex items-center justify-center rounded transition-all duration-200"
              style={{ color: "#FFD700", fontFamily: "'Public Sans', sans-serif" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#1E1E1E";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#FFD700";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>

          </div>

          {/* ───────── Form ───────── */}
          <div className="px-6 pb-6 space-y-4">
            {mode === "register" && (
              <ParallelogramInput placeholder="Full name" label={"Full name"} />
            )}

            <ParallelogramInput placeholder="Email address" label={"Email"} />

            {/* Password */}
            <ParallelogramInput
              type="password"
              placeholder="Password"
              label="Password"
              showPassword={showPassword}
              onToggleShow={() => setShowPassword(!showPassword)}
            />

            {mode === "register" && (
              <ParallelogramInput
                type="password"
                placeholder="Confirm password"
                label="Confirm Password"
                showPassword={showConfirmPassword}
                onToggleShow={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}

            {/* Submit */}
            <div className="relative w-[383px] h-[48px]">
              <div className="overflow rounded-[12px] h-full w-full">
                <div
                  className="h-full w-full "
                  style={{
                    transform: "skewX(-15deg)",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                    position: "relative",
                    background:
                      mode === "login"
                        ? "rgba(255, 235, 156, 1)"
                        : "rgba(255, 235, 156, 1)",
                  }}
                >
                  <div
                    style={{
                      transform: "skewX(15deg)",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full font-semibold flex items-center justify-center gap-2 bg-transparent border-none outline-none"
                      style={{
                        color:
                          mode === "login" ? "[#FFEB9C]" : "[#FFEB9C]",
                      }}
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : mode === "login" ? (
                        "Sign In"
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer with image */}
            <div className="relative w-full h-[50px]">
              <img
                src="/flower1.svg"
                alt="Footer Flower"
                className="absolute right-0 h-20 w-20 object-contain"
                style={{ bottom: "-12px" }} 
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSystem;
