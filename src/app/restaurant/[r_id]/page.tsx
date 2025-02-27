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
    <div>
      <div className="text-orange-FE text-3xl font-bold shadow-gray-32">
        {restaurant.name}
      </div >
      <div className="flex flex-col">
        {restaurant.items.map((item) => (
          <div key={item.id}>
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
