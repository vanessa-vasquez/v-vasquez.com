"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewAssetsContextType = {
  isViewAssetsActive: boolean;
  toggleViewAssets: () => void;
};

const ViewAssetsContext = createContext<ViewAssetsContextType | undefined>(
  undefined
);

export function ViewAssetsProvider({ children }: { children: ReactNode }) {
  const [isViewAssetsActive, setIsViewAssetsActive] = useState(false);

  const toggleViewAssets = () => {
    setIsViewAssetsActive((prev) => !prev);
  };

  return (
    <ViewAssetsContext.Provider
      value={{
        isViewAssetsActive,
        toggleViewAssets,
      }}
    >
      {children}
    </ViewAssetsContext.Provider>
  );
}

export function useViewAssets() {
  const context = useContext(ViewAssetsContext);
  if (!context) {
    throw new Error("useViewAssets must be used inside <ViewAssetsProvider>");
  }
  return context;
}
