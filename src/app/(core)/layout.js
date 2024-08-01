import Navbar from "@/components/custom/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="lg:px-10 px-4">{children}</main>
    </>
  );
}
