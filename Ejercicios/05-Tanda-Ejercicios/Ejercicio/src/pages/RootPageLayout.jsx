import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootPageLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootPageLayout