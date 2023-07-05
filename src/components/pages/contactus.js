import React from 'react';
import '../../App.css';
import './contactus.css'
import { Button } from '../Button';
export default function ContactUs() {
  return(

   <><><h1 className='contactus'>CONTACT US</h1></><div class="container">
      <div class="circle" id='first_circle'><p>Dr B R Ambedkar<br /> National Institute <br />
        of Technology G.T.<br /> Road, Amritsar <br />Bypass, Jalandhar<br />
        (Punjab), India -<br />144011</p></div>
      <div class="circle"><p>+91-9888604632</p></div>
      <div class="circle" id='last_circle'><p>wrec@nitj.ac.in</p></div>
      </div>

      <div class="name"> 
         <form>
            <input
              className='footer-contactus'
              name='message'
              type='message'
              placeholder='Your Name'
            />
          </form>
        </div>
      <div class="mail"><form>
            <input
              className='footer-contactus'
              name='message'
              type='message'
              placeholder='Your E-mail'
            />
          </form>
        </div>
      <div class="subject"><form>
            <input
              className='footer-contactus'
              name='message'
              type='message'
              placeholder='Subject'
            />
          </form>
        </div>
      <div class="message"><form>
            <input
              className='footer-contactus'
              name='message'
              type='message'
              placeholder='Message'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
    </>
  )

}