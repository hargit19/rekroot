import React from 'react'
import "../css/topcompanies.css"
import company1 from "../css/company1.png"
import company2 from "../css/company2.png"
import company3 from "../css/company3.png"
import company4 from "../css/company4.png"
import company5 from "../css/company5.png"
import company6 from "../css/company6.png"
import company7 from "../css/company7.png"
import company8 from "../css/company8.png"




export default function TopCompanies() {
  return (

    < div className='top-companies'>
      
      <div className="top-companies-head">Top Hiring Companies</div>
      <div className="top-companies-head-2">get started with the best companies</div>
      
      <div className="top-companies-cards">
        <div className="top-companies-cards-content">
<img src={company1} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Rival Gaming</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company2} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Rammix INC</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company3} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Nested Routes Inc</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company4} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Buagaga Inc.</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company5} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Transparent Ideas</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company6} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Software Kings</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company7} alt='annexure' className='top-companies-cards-content-img'></img>
<p>mindmap.ai</p>
        </div>

        <div className="top-companies-cards-content">
<img src={company8} alt='annexure' className='top-companies-cards-content-img'></img>
<p>Astellas Inc.</p>
        </div>
      </div>
      </div>
  )
}
