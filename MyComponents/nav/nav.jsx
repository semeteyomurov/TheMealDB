import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="navContainer">
            <div className="navContent">
                <div className="navPhoto"></div>
                <div className="navUl">
                    <ul className='navUlLi'>
                        <li><button className='btnNav'>Home</button></li>
                        <li className='navHover'>API</li>
                        <li className='navHover'>Forum</li>
                        <li><input placeholder='Search' className='navInput' type="text" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav