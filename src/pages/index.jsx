import LogoSVG from "./../assets/logo"

export default function Index () {
    return(
        <>
            <header>
                <div>
                    <LogoSVG/>
                </div>
                <div>
                    <nav className="header-menu">
                        <div className="header-menu">
                            <li><button href="#" className="home-button">Home</button></li>
                            <li><a href="#">Movies & Shows</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Subscriptions</a></li>
                        </div>
                            
                    </nav>
                </div>
                <div>
                    
                </div>
            </header>
        </>
    )
}