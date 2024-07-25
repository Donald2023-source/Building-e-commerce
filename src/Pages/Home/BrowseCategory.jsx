import ConstructionChemicals from '../../assets/healthicons_chemical-burn.png'
import constructionMaterials from '../../assets/material-symbols.png'
import Electronics from '../../assets/power.png'
import FarmMaterials from '../../assets/farm.png'
import Furniture from '../../assets/chair.png'
import Paint from '../../assets/paint.png'
import { Link } from 'react-router-dom'
const BrowseCategory = () => {
    return (
        <>
        <div>
           <div className='lg:ml-[9rem] lg:block flex flex-col items-center py-10'>
            <h4 className='border-l-[0.8rem] border-boldText rounded-l-md px-3'>Categories</h4>
            <h2 className='text-3xl font-semibold py-4'>Browse By Category</h2>

            <section className='lg:flex lg:gap-[3.3rem] grid md:grid-cols-3 grid-cols-2 gap-10'>

                <Link to={'/cons'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={ConstructionChemicals} alt="img" />
                    <p>Construction Chemicals</p>
                </div>
                </Link>

                <Link to={'construction-materials'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={constructionMaterials} alt="img" />
                    <p>Construction Materials</p>
                </div>
                </Link>

                <Link to={'electronics'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={Electronics} alt="img" />
                    <p>Electronics</p>
                </div>
                </Link>

                <Link to={'farm-materials'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={FarmMaterials} alt="img" />
                    <p>Farm Materials</p>
                </div>
                </Link>

                <Link to={'furniture'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={Furniture} alt="img" />
                    <p>Furniture</p>
                </div>
                </Link>

                <Link to={'paints'}>
                <div className='w-40 border py-5 rounded-md flex flex-col items-center text-center'>
                    <img src={Paint} alt="" />
                    <p>Paint</p>
                </div>
                </Link>
            </section>
           </div>
        </div>
        </>
    )
}
export default BrowseCategory