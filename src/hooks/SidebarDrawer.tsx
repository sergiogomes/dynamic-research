import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useContext, createContext } from "react";

interface SidebarDrawerProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export function useSidebarDrawer() {
  return useContext(SidebarDrawerContext);
}