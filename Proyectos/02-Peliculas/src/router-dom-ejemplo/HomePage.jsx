import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div> Estoy en HomePage</div>
            <Link to="..">Volver al home</Link>
        </>
    )
}

export default HomePage