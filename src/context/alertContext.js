import React, { createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const toast = useToast();

  const onOpen = (type, message, color) => {
    toast({
      title: type === "success" ? "Success" : "Error",
      description: message,
      status: type === "success" ? "success" : "error",
      duration: 5000,
      isClosable: true,
      color: color || undefined, // Set desired color for the toast
    });
  };

  const value = { onOpen };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }

  return context;
};

export { AlertProvider, useAlertContext };
