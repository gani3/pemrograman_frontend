


/**
    * kodingan improfisasi sendiri 
    *   function Hello(props) {
    *     const tanggal = Date("d-m-Y")
    *       return(
    *           <>
    *               <h5>{tanggal}</h5>
    *               <h1>{props.user}</h1>
    *               <h3>{props.welcome}</h3>
    *           </>
    *       )
    *   }
    *   function Main(props) {const perulangan = props.ulang
    *       const User = ['Gani','Sandi','Sidik']
    *       let ulangi = []
    *       for (let index = 0; index < perulangan; index++) {
    *           ulangi.push(
    *               <Hello 
    *               user={`Hy React ${User[index]} `} 
    *               welcome={"Let's Learning About React"} 
    *               />
    *           )
    *       }
    *       return (
    *           <div>
    *               {ulangi}
    *               <h1>Isi kontent diulang sebanyak {perulangan}</h1>
    *           </div>
    *           )
 *   }
*/

function Hello(props) {
    return(
        <>
            <h1>Hello {props.nama}</h1>
            <h3>Selamat datang di jurusan {props.jurusan}</h3>
        </>
    )
}
function Header() {
    return(
        <div>
            <ul>
                <li>About</li>
                <li>Home Page</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

function  Main(props) {
    return(
        <div>
        <Hello nama="Gani" jurusan="Informatika" />
        <Hello nama="Sandi" jurusan="Digital Bisnis" />
        <Hello nama="Sidik" jurusan="Sistem Informatika" />
        </div>
    )
}
function Footer(props) {
    return(
        <>
            <p>{props.content}</p>
        </>
    )
}

function App(props) {
    return(
    <>
        <Header/>
        <Main />
        <Footer content={'Copyright @Gani'}/>   
    </>)
}
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App/>);