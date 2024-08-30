import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ConstructionChemicals from '../../assets/healthicons_chemical-burn.png'
import constructionMaterials from '../../assets/material-symbols.png'
import Electronics from '../../assets/power.png'
import FarmMaterials from '../../assets/farm.png'
import Furniture from '../../assets/chair.png'
import Paint from '../../assets/paint.png'
import { Link } from 'react-router-dom'

const BrowseCategory = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    if (inView) {
        controls.start({ opacity: 1, x: 0 });
    }

    const slideInVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <>
            <div>
                <div className='lg:ml-[9rem] lg:block flex flex-col items-center py-10'>
                    <h4 className='border-l-[0.8rem] border-boldText rounded-l-md px-3'>Categories</h4>
                    <h2 className='text-3xl font-semibold py-4'>Browse By Category</h2>

                    <section className='lg:flex lg:gap-[3.3rem] grid md:grid-cols-3 grid-cols-2 gap-5'>
                        
                        <Link to={'/cons'}>
                            <motion.div 
                                className='w-40 border py-5 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={ConstructionChemicals} alt="Construction Chemicals" />
                                <p>Construction Chemicals</p>
                            </motion.div>
                        </Link>

                        <Link to={'/construction-materials'}>
                            <motion.div 
                                className='w-40 border py-5 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={constructionMaterials} alt="Construction Materials" />
                                <p>Construction Materials</p>
                            </motion.div>
                        </Link>

                        <Link to={'/electronics'}>
                            <motion.div 
                                className='w-40 border py-5 h-36 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={Electronics} alt="Electronics" />
                                <p>Electronics</p>
                            </motion.div>
                        </Link>

                        <Link to={'/farm-materials'}>
                            <motion.div 
                                className='w-40 border py-5 h-36 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={FarmMaterials} alt="Farm Materials" />
                                <p>Farm Materials</p>
                            </motion.div>
                        </Link>

                        <Link to={'/furniture'}>
                            <motion.div 
                                className='w-40 border py-5 h-36 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={Furniture} alt="Furniture" />
                                <p>Furniture</p>
                            </motion.div>
                        </Link>

                        <Link to={'/paints'}>
                            <motion.div 
                                className='w-40 border py-5 h-36 rounded-md flex flex-col items-center text-center'
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={slideInVariants}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={Paint} alt="Paint" />
                                <p>Paint</p>
                            </motion.div>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
}

export default BrowseCategory;
