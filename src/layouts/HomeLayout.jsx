import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const Flags=[
    {images:<img src='https://flagcdn.com/cy.svg'/>,name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {images:<img src='https://flagcdn.com/cy.svg'/>,name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {images:<img src='https://flagcdn.com/cy.svg'/>,name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    // {name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
  ]
  return (
    <div>
        <Header />
        <div className='px-24 py-8'>
        <h1 className='text-[25px] '>View Countries</h1>
         <div className='flex justify-between '>
          <p>Page 1 of 5</p>
          <select name="selecting" id="sel">
            <option >Select Continent</option>
          </select>
         </div>
         <div className='grid grid-cols-5 grid-rows-2'>
          {Flags.map((image,index)=>(
          <div key={index} className=''>
            <div>{image.images}</div>
            <h1>{image.name}</h1>
            <p>Capital: {image.capital}</p>
            <p>{image.po}</p>
            <p>{image.reg}</p>
          </div>
          ))}
         </div>
      
        </div>
        <Footer />
      
    </div>
  )
}

export default HomeLayout