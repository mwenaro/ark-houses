"use client";
import { GlobalData} from "@/types/core";
import LocalStorageManager from "@/utils/localStorage";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface ContextProps {
  data: GlobalData;
   setData: Dispatch<SetStateAction<GlobalData>>;
}

const initialData: GlobalData = {
  user: null,
  categories: [],
  banners: [],
  shoppingCart: [],
  order: null,
  isModalOpen: false,
  uploadedImgPath: "",
  shopDetails: null,
  cartFuncs:{},
  handleLogout: function (cb: any = null) {
    this.user = null;
    LocalStorageManager.removeItem("user");
    if (cb) cb();
    // console.log({ user: LocalStorageManager.get("user") || "Not there" });
  },
};

const GlobalContext = createContext<ContextProps>({
  data: initialData,
  setData: (): any => {
    user: null;
  },
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [globalData, setData] = useState<GlobalData>(initialData);


  return (
    <GlobalContext.Provider value={{ 
      data: globalData,
       setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext: any = () => useContext(GlobalContext);
