import Navbar from "@/components/custom/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />

            <main className="px-4">
                {children}
            </main>
        </>
    )
}