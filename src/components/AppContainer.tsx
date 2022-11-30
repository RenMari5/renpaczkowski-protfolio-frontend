import { AppShell, Header, Group, Title } from "@mantine/core";
import React from "react";

interface Props {
  children: React.ReactNode;
  header?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export default function AppContainer({ children, header }: Props) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={header}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
