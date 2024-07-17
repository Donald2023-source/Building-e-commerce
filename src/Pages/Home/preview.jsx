import Home1 from '../../assets/Home1.png'
import Home2 from '../../assets/Home2.png'
import Home3 from '../../assets/Home3.png'
const Preview  = () => {
    return (
        <>
        <div className='flex justify-center gap-8 mt-5 px-3'>
            <div>
                <img className='lg:h-fit md:h-fit h-[11.5rem] hover:scale-105 transition ease-in-out
                 duration-500' src={Home1} alt="" />
            </div>
            <div className='flex flex-col gap-6'>
                <img className='lg:h-fit md:h-fit h-[5rem] hover:scale-105 transition ease-in-out
                 duration-500' src={Home2} alt="" />
                <img className='lg:h-fit md:h-fit h-[5rem] hover:scale-105 transition ease-in-out
                 duration-500' src={Home3} alt="" />
            </div>
        </div>
        </>
    )
}
export default Preview