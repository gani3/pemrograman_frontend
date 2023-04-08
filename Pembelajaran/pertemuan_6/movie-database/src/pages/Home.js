import {
    Navbar,
    Footer,
    Hero,
    Movies,
    Form
} from "../MainImport/AllImport"
function Home(params) {
    return(
        <div>
            <Navbar/>
            <Hero/>
                <Movies/>
                <Form/>
            <Footer/>
        </div>
    )
}

export default Home