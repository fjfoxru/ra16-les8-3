import AuthProvider from '../components/AuthProvider/AuthProvider';
import Toolbar from '../components/Toolbar/Toolbar';
import AllNews from '../components/AllNews/AllNews';

function Landing () {
    return (
        <AuthProvider>
            <Toolbar/>
            <AllNews />
        </AuthProvider>
    )
}

export default Landing;