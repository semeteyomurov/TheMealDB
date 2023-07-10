import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footerContainer">
            <div className="footerContent">
                <div className="footerPhoto">
                    <div className="PhotoF One"></div>
                    <div className="PhotoF Two"></div>
                    <div className="PhotoF Three"></div>
                    <span className='spanS'>© 2023 TheMealDB <br />
                    Proudly built in the UK</span>
                    <ul className='footerUl'>
                        <li>About</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer