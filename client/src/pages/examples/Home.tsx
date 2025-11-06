import Home from "../Home";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function HomeExample() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
