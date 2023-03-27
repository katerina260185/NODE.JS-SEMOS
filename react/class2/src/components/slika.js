// funkcionalna komponenta
const roleri = {
    slika: "https://www.dsport.mk/looper-deciji-lfs-looper-roleri-n67778"
}
export const Slika = () => {
    return (
        <div>
            <h2>Moeto omileno hobi:</h2>
       <img src={roleri.slika}></img>
       </div>

    )
}