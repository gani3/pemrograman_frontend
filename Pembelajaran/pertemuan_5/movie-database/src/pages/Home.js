import {
    Navbar,
    Footer,
    Hero,
    CssHome
} from "../MainImport/AllImport"
function Home(params) {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className={CssHome.container}>
                <h2>Halaman Home</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Home