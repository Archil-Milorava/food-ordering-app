import Header from "../../components/header/Header"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import { useState } from "react"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"

function Home() {

const [category, setCategory] = useState("All")

  return (
    <div className="h-auto w-full flex flex-col gap-6">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home