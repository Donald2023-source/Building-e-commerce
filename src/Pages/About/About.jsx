import React from 'react'
import aboutImg from '../../assets/About_Img.png'
import about1 from '../../assets/About1.png'
import about2 from '../../assets/About2.png'
import about3 from '../../assets/About3.png'
import about4 from '../../assets/About4.png'
const About = () => {

  const services = [
    {name: "OK", text: "Sallers active our site", img:about1},
    {name: "OK", text: "Monthly product sale", img:about2},
    {name: "OK", text: "Customer active in our site", img:about3},
    {name: "OK", text: "Annual gross sale  in our site", img:about4}
  ]
  return (
    <div>
        <div className='flex justify-center lg:flex-row flex-col lg:text-left  text-center gap-20 py-5 items-center'>
            <div className='lg:w-[33%] w-screen leading-[1.7rem] flex flex-col gap-8 px-4'>
              <h2 className='font-semibold text-3xl'>ABOUT US</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores maxime explicabo odit, numquam veniam, reprehenderit placeat debitis quod necessitatibus, recusandae inventore exercitationem. Ipsa nihil, fuga officiis incidunt quam quis. Officiis odio nostrum magnam ipsam sint animi, corrupti unde nemo repudiandae provident illum maiores ratione, qui, quam veritatis incidunt offici
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias natus molestiae, reprehenderit id voluptates doloribus aut, tempore sint deserunt consequat
            </p>

            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi asperiores maxime explicabo odit, numquam veniam, reprehenderit placeat debitis quod necessitatibus, recusandae inventore exercitationem. Ipsa nihil, fuga officiis incidunt quam quis.
            </p>
            </div>
            <img className='w-[80%] lg:w-[40%]' src={aboutImg} alt="" />
        </div>

        <div className='flex justify-center flex-wrap gap-20 py-10'>
            {services.map((item) => (
              <div className='border w-fit hover:bg-black hover:text-white transition ease-in-out duration-500 rounded-md p-8 text-center flex flex-col items-center gap-1' key={item.id}>
                  <img className='h-16' src={item.img} alt="" />
                  <h2 className='font-bold text-2xl'>{item.name}</h2>
                  <p>{item.text}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default About