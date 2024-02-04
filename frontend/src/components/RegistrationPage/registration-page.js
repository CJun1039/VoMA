import RegistrationContainer from "../Registration/registration-container";

export default function RegistrationPage() {
  return (
    <section className="relative">
      <div className="grid h-screen grid-cols-2">
        <div className="bg-orange-red/80"></div>
        <div className="bg-background-vector bg-bottom"></div>
      </div>
      <RegistrationContainer />
    </section>
  );
}
