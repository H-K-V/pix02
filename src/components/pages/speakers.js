import React from 'react';
import '../../App.css';

import CardItem from '../CardItem';
import './speakers.css';

export default function Speakers(){

  return (
  <><h1 className='speakers'>KEYNOTE SPEAKERS</h1>
  <>
     <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Prof. Irene Yu-Hua (Professor, Chalmers University of Technology, Sweden)'
             
            />
            <CardItem
              src='images/img-7.jpg'
              text='Dr. Rashmi Sharan Sinha (Research Scientist, Nanyang Technological University, Singapore)'
           
            />
            <CardItem
              src='images/img-7.jpg'
              text='Dr Seema Singh 
               MS (Surgery), PGDM (IIM-A)
              Digital Health Consultant'
            
            />
          </ul>
        </div>
      </div>
    </div>
  </>
  </>
  )


}