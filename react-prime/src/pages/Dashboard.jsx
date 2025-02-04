import { Card } from "primereact/card"
import { Image } from 'primereact/image';
import userAvatar from "../assets/user-avatar-female-9.png";



function Home(){

    return (
      <Card className=" shadow-none bg-[#F3F0FF] p-4 md:p-6 border-solid"  >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Hi, </h1>
            <p className="text-gray-600"></p>
          </div>
          <div className=" w-3  ">
          <Image
            src={userAvatar} // Usamos la variable importada
            alt="Welcome illustration"
            className="object-contain"
          />
          </div>
        </div>
      </Card>
    )
}

export default Home