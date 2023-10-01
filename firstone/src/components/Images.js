import ballon_water from '../assets/ballon_water.jpeg' // Usar imagem de assets

const Images = () => {
    return (
        <div>
            <img src="/ballon.jpeg" alt=""/> {/* Usar imagens do public */}
            <img src={ballon_water} alt=""/> {/* Usar a imagem importada de assets */}
        </div>
    )
}

export default Images