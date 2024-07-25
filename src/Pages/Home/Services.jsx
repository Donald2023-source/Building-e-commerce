import servicesImg1 from '../../assets/Services (2).png'
import servicesImg2 from '../../assets/shield.png'
import servicesImg3 from '../../assets/Services.png'
const Services  = () => {
    return (
        <>
        <div>
            <section className='flex lg:flex-row md:flex-row md:gap-20 flex-col lg justify-center gap-16 lg:gap-48 py-8'>
                <div className='flex flex-col items-center gap-2 hover:scale-110 transition duration-500'>
                    <img className='h-16' src={servicesImg1} alt="" /> 
                    <h4 className='font-bold text-boldText'>CONTACT WITH SUPPLIER</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                
                <div className='flex flex-col items-center gap-2 hover:scale-110 transition duration-500'>
                    <img className='h-16' src={servicesImg2} alt="" /> 
                    <h4 className='font-bold text-boldText'>QUALITY PRODUCTS</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>

                <div className='flex flex-col items-center gap-2 hover:scale-110 transition duration-500'>
                    <img className='h-16' src={servicesImg3} alt="" /> 
                    <h4 className='font-bold text-boldText'>DELIVERY WITHIN JOS</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
        </div>
        </>
    )
}
export default Services