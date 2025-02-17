
export default function AllCategory() {

  const vagitables = ["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages", "Beauty & health", "Bread & Bakary"
  ];

  return (
    <div className="">
      <h3 className="font-bold text-xl">All Category</h3>
      <div>
          {
            vagitables?.map((vagitable,idx)=><p key={idx} className="">{vagitable}</p>)
          }
      </div>

    </div>
  )
}
