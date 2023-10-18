"use client";
import { loadDataFromLocalStorage } from "@/utils/helpers";
import React from "react";

type WrappedComponentProps = {
  loadDataFromLocalStorage: () => void;
};

const withLocalStorageData = <P extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<P & React.HTMLAttributes<HTMLElement>>
) => {
  const WithLocalStorageData: React.FC<
    P & React.HTMLAttributes<HTMLElement>
  > = (props) => {
    return (
      <WrappedComponent
        {...props}
        loadDataFromLocalStorage={loadDataFromLocalStorage}
      />
    );
  };

  WithLocalStorageData.displayName = `withLocalStorageData(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithLocalStorageData;
};

export default withLocalStorageData;
