import NavBar from "@/components/Navbar/NavBar";
import Drawer from "@/components/Navbar/Drawer";
import SearchBar from "@/components/Navbar/SearchBar";
import Footer from "@/components/footer/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Drawer />
      <NavBar />
      <SearchBar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}