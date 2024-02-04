import LoginContainer from "../Login/login-container";

export default function LoginPage() {
  return (
    <section className="relative">
      <div className="grid h-screen grid-cols-2">
        <div className="bg-orange-red/80"></div>
        <div className="bg-background-vector bg-bottom"></div>
      </div>
      <LoginContainer />
    </section>
  );
}
