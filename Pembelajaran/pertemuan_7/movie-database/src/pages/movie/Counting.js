import {useEffect, useState} from 'react'
export default function TopRated(){

    let [angka, setAngka] = useState(0)
    
    const updateAngkat = (param) =>{
        if (param === 'add') {
            setAngka(angka + 1)
        }else if (param === 'sub') {
            setAngka(angka - 1)
        }else if (param === 'multiadd'){
            setAngka(angka => (angka + 1))
            setAngka(angka => (angka + 1))
            setAngka(angka => (angka + 1))
            setAngka(angka => (angka + 1))
        }else if (param === 'multisub'){
            setAngka(angka - 2)
        }
    }

    useEffect(()=>{
        // Akses DOM
        document.title = `Angka : ${angka}`
    },[angka])

    return(
    <div>
        <h2>Counter :  {angka}</h2>
        <br />
        <button onClick={e => updateAngkat('add')}><h2>&nbsp;+&nbsp;</h2></button> &nbsp;
        <button onClick={e =>updateAngkat('sub')}> <h2>&nbsp;-&nbsp;</h2></button> &nbsp;
        <button onClick={e =>updateAngkat('multiadd')}> <h2>&nbsp;+4&nbsp;</h2></button> &nbsp;
        <button onClick={e =>updateAngkat('multisub')}> <h2>&nbsp;-2&nbsp;</h2></button> &nbsp;
    </div>
    )
}