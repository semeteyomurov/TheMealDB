import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <div className="headerContainer">
            <div className="headerContent">
                <div className="headerPhoto"></div>
                <div className="headerText">
                    <h1>Welcome to TheMealDB</h1>
                    <p className='headerP'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the <world className="br"></world>
                    We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                    <button className='headerButton'>Subscribe</button>
                    <p className='headerP'>Click above button to upgrade API for $3 per month   (cancel anytime) <br />
                    Currently 76 supporters</p>
                </div>
                <div className="headerPhoto"></div>
            </div>
            <div className="borderBottom"></div>
        </div>
    </header>
    </>
  )
}

export default Header