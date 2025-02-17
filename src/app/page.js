import SideBar from "@/components/home/SideBar";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-12">
      <div className="col-span-3"><SideBar></SideBar></div>
      <div className="col-span-9 min-h-screen"> hi</div>
    </main>
  );
}
