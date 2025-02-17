"use client"
import Banner from "@/components/home/Banner";
import CardHome from "@/components/home/CardHome";
import SideBar from "@/components/home/SideBar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [vegetables, setVegetables] = useState([]);
  console.log(vegetables)
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setVegetables(data?.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <main>
       <Banner></Banner>
      <div className="container mx-auto grid grid-cols-12 gap-5">
        <div className="col-span-3"><SideBar></SideBar></div>
        <div className="col-span-9 min-h-screen ">

          <div className="grid grid-cols-3 gap-5">
            {
              vegetables && vegetables?.map((vegetable, idx) => <CardHome key={idx} vegetable={vegetable}></CardHome>)
            }
          </div>

        </div>
      </div>

    </main>
  );
}
