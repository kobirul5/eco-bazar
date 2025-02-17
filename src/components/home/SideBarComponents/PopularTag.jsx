
export default function PopularTag() {

  const items = [
    "Healthy",
    "Low fat",
    "Vegetarian",
    "Kid foods",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Launch",
    "Dinner",
    "Breacktast",
    "Fruit"
  ];

  return (
    <div>
      <h3 className="font-bold text-xl">Populer Tag</h3>
        <div className="gap-4 flex flex-wrap mt-4">
          {
            items?.map((i,idx)=><button className="btn btn-xs px-3 rounded-full" key={idx}>{i}</button>)
          }
        </div>
    </div>
  )
}
