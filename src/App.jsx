import SocialLogin from './SocialLogin';
import { Apple } from 'lucide-react';

function App() {
    return (
        <>
            <SocialLogin
                bg='blue'
                icon={<Apple />}
                name=' Facdbook'
            ></SocialLogin>
            <SocialLogin
                bg='blue'
                icon={<Apple />}
                name=' Facdbook'
            ></SocialLogin>
            <SocialLogin
                bg='blue'
                icon={<Apple />}
                name=' Facdbook'
            ></SocialLogin>
            <SocialLogin
                bg='blue'
                icon={<Apple />}
                name=' Facdbook'
            ></SocialLogin>
        </>
    );
}

export default App;
