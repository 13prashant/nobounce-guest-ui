import Logo from "../common/Logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b py-4 sticky top-0 z-50 backdrop-filter backdrop:blur-lg bg-background/90">
      <div className="container py-0 flex justify-between items-center">
        <Logo />
        <Button>Login</Button>
      </div>
    </header>
  );
}
