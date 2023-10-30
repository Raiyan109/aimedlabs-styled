import './login.css'
import img1 from '../assets/model.png'
const Login = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={img1} alt="" />
                </div>
                {/* right */}
                <div className='right'>
                    <div className='right-container'>
                        <h1 className='heading'>Login</h1>
                        <div>
                            <label>Login ID</label>
                            <input type="text" placeholder='Enter Login ID' />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder='Enter Password' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;