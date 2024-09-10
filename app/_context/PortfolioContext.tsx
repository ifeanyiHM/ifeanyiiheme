"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import {
  defaultPortfolioProps,
  PortfolioContextProps,
} from "../Data/PortfolioProps";
import { useBrowserStorageState } from "../Hooks/useBrowserStorageState";

interface PortfolioProviderProps {
  children: ReactNode;
}

const PortContext = createContext<PortfolioContextProps>(defaultPortfolioProps);

function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [lightMode, setLightMode] = useBrowserStorageState<boolean>(
    false,
    "lightmode"
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const injectCursorPosition = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--x",
        Math.round(event.clientX).toString()
      );
      document.documentElement.style.setProperty(
        "--y",
        Math.round(event.clientY).toString()
      );
    };

    document.body.addEventListener("pointermove", injectCursorPosition);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("pointermove", injectCursorPosition);
    };
  }, []);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.remove("lightMode");
    }

    return () => {
      document.body.classList.remove("lightMode");
    };
  }, [lightMode]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <PortContext.Provider
      value={{
        lightMode,
        setLightMode,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </PortContext.Provider>
  );
}

export { PortfolioProvider, PortContext };
