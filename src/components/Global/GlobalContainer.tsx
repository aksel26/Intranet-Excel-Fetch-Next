"use client";

import { theme } from "@/lib/theme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";
export const GlobalContainer = ({ children }: { children: React.ReactNode }) => {
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     // 여기에 초기 로딩 로직을 추가할 수 있습니다.
  //     const timer = setTimeout(() => setIsLoading(false), 2000);
  //     return () => clearTimeout(timer);
  //   }, []);
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  );
};
