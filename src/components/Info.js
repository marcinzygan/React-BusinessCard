import hero from "./images/hero.png"
function Info(){
    return (
        <>
        <img src={hero} className="hero__img" alt="Marcin Zygan"></img>
        <h1 className="hero__name">Marcin Zygan</h1>
        <h3 className="hero__subtitle">Frontend Developer</h3>
        <p className="hero__p">marcin-zygan.com</p>
        <a href="https://marcin-zygan.com" className="email__btn"><span className="iconify" data-icon="ic:round-email"></span>Email</a>
        </>
    )
}
export default Info