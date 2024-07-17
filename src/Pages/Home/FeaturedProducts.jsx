import { CiHeart } from "react-icons/ci"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import metals from '../../assets/rusted-metal.png'
import knots from '../../assets/nuts.png'
import drill from '../../assets/drill-device.png'
import bolt from '../../assets/bots.png'
import fourStar from '../../assets/Four Star.png'


const FeaturedProducts = () => {
    return  (
        <>
        <div>
            <div className="lg:ml-[8.3rem] px-4 flex flex-col lg:items-start md:items-center">
            <h4 className='border-l-[0.8rem] border-boldText rounded-l-md px-3'>This Month</h4>
              <h2 className='text-3xl font-semibold py-4'>Featured Products</h2> 

            <div className="lg:flex grid md:grid-cols-3 place-items-center grid-cols-2 gap-12">

            <div className="relative py-3 w-fit">
                      <img src={metals} alt='img' />
                      <div className="text-silver flex items-start justify-between px-2 absolute top-6 left-0 right-0">
                        <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                          -90%
                        </span>
                        <div className="flex flex-col gap-2">
                          <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                          <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                        </div>
                      </div>

                      <button className="bg-black text-white w-full text-center py-1 absolute top-[14.5rem] border-radius opacity-0 hover:opacity-100 transistion duration-500">
                        Add To Cart
                      </button>
                      <div>
                        <h2 className="font-bold">Name of Product</h2>

                        <span className="flex gap-4">
                        <h4>N 0.0</h4>
                        <h4 className="text-gray-300 line-through">N 0.0</h4>
                        </span>

                        <span className="flex items-center">
                        <img src={fourStar} alt="" />
                        <h4>(75)</h4>
                        </span>
                      </div>
                    </div>

                    <div className="relative py-3 w-fit">
                      <img src={knots} alt='img'  />
                      <div className="text-silver flex items-start justify-between px-2 absolute top-6 left-0 right-0">
                        <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                          -90%
                        </span>
                        <div className="flex flex-col gap-2">
                          <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                          <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                        </div>
                      </div>
                      <button className="bg-black text-white w-full text-center py-1 absolute top-[14.5rem] border-radius opacity-0 hover:opacity-100 transistion duration-500">
                        Add To Cart
                      </button>

                      <div>
                        <h2 className="font-bold">Name of Product</h2>

                        <span className="flex gap-4">
                        <h4>N 0.0</h4>
                        <h4 className="text-gray-300 line-through">N 0.0</h4>
                        </span>

                        <span className="flex items-center">
                        <img src={fourStar} alt="" />
                        <h4>(75)</h4>
                        </span>
                      </div>
                    </div>

                    <div className="relative py-3 w-fit">
                      <img src={drill} alt='img'  />
                      <div className="text-silver flex items-start justify-between px-2 absolute top-6 left-0 right-0">
                        <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                          -90%
                        </span>
                        <div className="flex flex-col gap-2">
                          <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                          <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                        </div>
                      </div>
                      <button className="bg-black text-white w-full text-center py-1 absolute top-[14.5rem] border-radius opacity-0 hover:opacity-100 transistion duration-500">
                        Add To Cart
                      </button>

                      <div>
                        <h2 className="font-bold">Name of Product</h2>

                        <span className="flex gap-4">
                        <h4>N 0.0</h4>
                        <h4 className="text-gray-300 line-through">N 0.0</h4>
                        </span>

                        <span className="flex items-center">
                        <img src={fourStar} alt="" />
                        <h4>(75)</h4>
                        </span>
                      </div>
                    </div>

                    <div className="relative py-3 w-fit">
                      <img src={bolt} alt='img'  />
                      <div className="text-silver flex items-start justify-between px-2 absolute top-6 left-0 right-0">
                        <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                          -90%
                        </span>
                        <div className="flex flex-col gap-2">
                          <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                          <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                        </div>
                      </div>
                      <button className="bg-black text-white w-full text-center py-1 absolute top-[14.5rem] border-radius opacity-0 hover:opacity-100 transistion duration-500">
                        Add To Cart
                      </button>

                      <div>
                        <h2 className="font-bold">Name of Product</h2>

                        <span className="flex gap-4">
                        <h4>N 0.0</h4>
                        <h4 className="text-gray-300 line-through">N 0.0</h4>
                        </span>

                        <span className="flex items-center">
                        <img src={fourStar} alt="" />
                        <h4>(75)</h4>
                        </span>
                      </div>
                    </div>
            </div>
            </div>

           
        </div>
        </>
    )
}
export default FeaturedProducts