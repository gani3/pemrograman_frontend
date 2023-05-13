import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container"

export default function BaseLayouts(props) {
    return(
    <div>
        <Navbar/>
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
        <Footer/>

    </div>
    )    
}
