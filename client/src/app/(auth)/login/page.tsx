import { LoginForm } from "@/components/login-form";
import MeridianIcon from "@/components/meridian-icon";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 min-h-svh w-full gap-6">
      <div className="flex flex-col items-center gap-1">
        <MeridianIcon size={48} />
        <h1 className="text-2xl font-bold tracking-tight">Meridian</h1>
        <p className="text-sm text-muted-foreground">Your personal wealth engine</p>
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
