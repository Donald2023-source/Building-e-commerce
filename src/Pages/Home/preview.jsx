import Home1 from '../../assets/Home1.png'
import Home2 from '../../assets/Home2.png'
import Home3 from '../../assets/Home3.png'
const Preview  = () => {
    return (
        <>
        <div className='flex justify-center gap-10 mt-5'>
            <div>
                <img src={Home1} alt="" />
            </div>
            <div className='flex flex-col gap-6'>
                <img src={Home2} alt="" />
                <img src={Home3} alt="" />
            </div>
        </div>
        </>
    )
}
export default Preview