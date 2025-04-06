import ItemRec from "@/components/ItemRec"
import ItemSquare from "@/components/ItemSquare"
import { getRestaurantById } from "@/lib/api/restaurants"

export default async function Page({
  params,
}: {
  params: Promise<{ r_id: string }>
}) {
  const restaurantID = Number((await params).r_id)
  const restaurant = await getRestaurantById(restaurantID)
  console.log(restaurant)

  return (
    <div className="max-w-lg mx-auto h-full px-14 w-full shadow-1 ">

      <img src={'placehold.co/600x400'} alt="restaurant" />
      <div>
        <div className="mt-16 font-extrabold  text-orange-FE text-3xl shadow-gray-32">
          {restaurant.name}
        </div >

      </div>
      <div className="w-full flex flex-col">
        {restaurant.items.map((item) => (
          <div className="mt-4" key={item.id}>
            <ItemRec
              restnId={restaurantID}
              id={item.id}
              imageUrl={item.image_url}
              favourite={true}
              price={item.price}
              rating={4.7}
              rateCount={20}
              title={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div >
  )
}
