import { Header, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <Header height={60} p="md">
      <div className="flex justify-between items-center h-full">
        <Link to="/" className="no-underline text-white">
          <Title color="tan" order={4}>
            Ren Paczkowski
          </Title>
        </Link>
      </div>
    </Header>
  );
}
