import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const Flags=[
    {images:<img src='https://flagcdn.com/cy.svg'/>,name:"Cyprus", capital:"Nicosia", po:"1207361", reg:"Europe"},
    {images:<img src='https://flagcdn.com/er.svg'/>,name:"CEritrea", capital:"Asmara", po:"5352000", reg:"EAfrica"},
    {images:<img src='https://flagcdn.com/lr.svg'/>,name:"Liberia", capital:"Monrovia", po:" 5057677", reg:"Africa"},
    {images:<img src='https://flagcdn.com/bm.svg'/>,name:"Bermuda", capital:"Hamilton", po:"  63903", reg:"Americas"},
    {images:<img src='https://flagcdn.com/va.svg'/>,name:"Vatican City", capital:"Vatican City", po:"  451", reg:"Europe"},
    {images:<img src='https://flagcdn.com/ck.svg'/>,name:"Cook Islands", capital:"Avarua", po:"  18100", reg:"Ociania"},
    {images:<img src='https://flagcdn.com/so.svg'/>,name:"Somalia", capital:"Mogadishu", po:"15893219", reg:"Africa"},
    {images:<img src='https://flagcdn.com/zm.svg'/>,name:"Zambia", capital:"Lusaka", po:"18383956", reg:"Africa"},
    {images:<img src='https://flagcdn.com/tm.svg'/>,name:"Turkmenistan", capital:"Ashgabat", po:" 6031187", reg:"Asia"},
    {images:<img src='https://flagcdn.com/al.svg'/>,name:"Albania", capital:"Tirana", po:" 2837743", reg:"Europe"},
    {images:<img src='https://flagcdn.com/hr.svg'/>,name:"Croatia", capital:"Tirana", po:" 4047200", reg:"Europe"},
    {images:<img src='https://flagcdn.com/gb.svg	'/>,name:"United Kingdom", capital:"London", po:"  67215293", reg:"Europe"},
    {images:<img src='https://flagcdn.com/sd.svg'/>,name:"Sudan", capital:"Khartoum", po:"43849269", reg:"Africa"},
    {images:<img src='https://flagcdn.com/tl.svg'/>,name:"Timor-Leste", capital:"Dili", po:" 1318442", reg:"Asia"},
    {images:<img src='https://flagcdn.com/cg.svg'/>,name:"Republic of the Congo", capital:"Brazzaville", po:" 5657000", reg:"Africa"},
    {images:<img src='https://flagcdn.com/az.svg	'/>,name:"Azerbaijan", capital:"Baku", po:" 10110116", reg:"Asia"},
    {images:<img src='https://flagcdn.com/ke.svg'/>,name:"Kenya", capital:"Nairobi", po:" 53771300", reg:"Africa"},
    {images:<img src='https://flagcdn.com/as.svg'/>,name:"America Samoa", capital:"Pago Pago", po:" 55197", reg:"Oceania"},
    {images:<img src='https://flagcdn.com/ci.svg'/>,name:"Ivory Coast", capital:"Yamoussoukro", po:"26378275", reg:"Africa"},
    {images:<img src='https://flagcdn.com/sn.svg'/>,name:"Senegal", capital:"Dakar", po:"16743930", reg:"Africa"},
    {images:<img src='https://flagcdn.com/vn.svg'/>,name:"Vietnam", capital:"Hanoi", po:"97338583", reg:"Asia"},
    {images:<img src='https://flagcdn.com/sv.svg'/>,name:"El Salvador", capital:"San Salvador", po:" 6486201", reg:"Americas"},
    {images:<img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'/>,name:"Afghanistan", capital:"Kabul", po:" 40218234", reg:"Asia"},
    {images:<img src='https://flagcdn.com/mf.svg'/>,name:"Saint Martin", capital:"Margot", po:" 38659", reg:"Americas"},
    {images:<img src='https://flagcdn.com/lv.svg	'/>,name:"Latvia", capital:"Liga", po:" 1901548", reg:"Europe"},
    {images:<img src='https://flagcdn.com/gt.svg'/>,name:"Guatemala", capital:"Guatemala City", po:" 16858333", reg:"Americas"},
    {images:<img src='https://flagcdn.com/kw.svg'/>,name:"Kuwait", capital:"Kuwait City", po:"  4270563", reg:"Asia"},
    {images:<img src='https://flagcdn.com/st.svg'/>,name:"São Tomé and Príncipe", capital:"São Tomé ", po:"  219161", reg:"Africa"},
    {images:<img src='https://flagcdn.com/kg.svg	'/>,name:"Kyrgyzstan", capital:"Bishkek ", po:"  6591600 ", reg:"Asia"},
    {images:<img src='https://flagcdn.com/pl.svg'/>,name:"Poland", capital:" Warsaw ", po:"37950802", reg:"Europe"},
    {images:<img src='https://flagcdn.com/gu.svg'/>,name:"Guam", capital:" Hagåtña", po:"168783", reg:"Oceania"},
    {images:<img src='https://flagcdn.com/gh.svg'/>,name:"Ghana", capital:"Accra", po:"31072945", reg:"Africa"},
    {images:<img src='https://flagcdn.com/lt.svg'/>,name:"Lithuania", capital:"Vilnius", po:"2794700", reg:"Europe"},
    {images:<img src='https://flagcdn.com/am.svg'/>,name:"Armenia", capital:"Yervan", po:"2963234", reg:"Asia"},
    {images:<img src='https://flagcdn.com/je.svg'/>,name:"Jersey", capital:"Saint Helier", po:"100800", reg:"Europe"},
    {images:<img src='https://flagcdn.com/gd.svg'/>,name:"Grenada", capital:"St. George's", po:"112519", reg:"Americas"},
    {images:<img src='https://flagcdn.com/tj.svg'/>,name:"Tajikistan", capital:"Dushanbe", po:" 9537642", reg:"Asia"},
    {images:<img src='https://flagcdn.com/et.svg'/>,name:"Ethiopia", capital:" Addis Ababa", po:" 114963583", reg:"Africa"},
    {images:<img src='https://flagcdn.com/eh.svg'/>,name:"Western Sahara", capital:" El Aaiún", po:" 510713", reg:"Africa"},
    {images:<img src='https://flagcdn.com/ma.svg'/>,name:"Morocco", capital:" Rabat", po:" 36910558", reg:"Africa"},
    {images:<img src='https://flagcdn.com/pr.svg'/>,name:"Puerto Rico", capital:"San Juan", po:" 3194034", reg:"Americas"},
    {images:<img src='https://flagcdn.com/cx.svg'/>,name:"Christmas Island", capital:"Flying Fish Cove", po:" 2072", reg:"Oceania"},
    {images:<img src='https://flagcdn.com/cx.svg'/>,name:"New Zealand", capital:"Wellington", po:" 5084300", reg:"Oceania"},
    {images:<img src='https://flagcdn.com/nz.svg'/>,name:"Brunei", capital:" Bandar Seri Begawan", po:" 437483", reg:"Asia"},
    {images:<img src='https://flagcdn.com/gf.svg'/>,name:"French Guiana", capital:"  Cayenne", po:"  254541", reg:"Americas"},
    {images:<img src='https://flagcdn.com/gf.svg'/>,name:"French Guiana", capital:"  Cayenne", po:"  254541", reg:"Americas"},
    {images:<img src='https://flagcdn.com/nu.svg'/>,name:"Niue", capital:"  Alofi", po:"  1470", reg:"Oceania"},
    {images:<img src='https://flagcdn.com/ro.svg'/>,name:"Romania", capital:"  Bucharest", po:" 19286123", reg:"Europe"},
    {images:<img src='https://flagcdn.com/sj.svg'/>,name:"Svalbard and Jan Mayen", capital:"Longyearbyen", po:" 2562", reg:"Europe"},
    {images:<img src='https://flagcdn.com/by.svg'/>,name:"Belarus", capital:" Minsk", po:"9398861", reg:"Europe"},





  ]
  
  return (
    <div>
        <Header />
        <div className='px-24 py-8 '>
        
         <div className='flex justify-between py-10'>
          <div>
         <h1 className='text-[25px] '>View Countries</h1>
          <p>Page 1 of 5</p>
          </div>
          <select name="selecting" id="sel">
            <option >Select Continent</option>
          </select>
         </div>
         <div className='grid grid-cols-5 grid-rows-2 space-x-10'>
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