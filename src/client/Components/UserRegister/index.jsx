import { Link } from 'react-router-dom';
import '../../App.css';
import './index.css'

function UserRegister () {

    return (

        <>
            <header>
                <div>
                    <p>Already have an account?</p>
                </div>
                <div>
                    <Link to="login"> <button className='signin'> Sign In </button> </Link>
                </div>
            </header>
            <div className='headertext'>
                <h1>Register Your Account!</h1>
            </div>
            <div>
                <form>
                    <label>
                        <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        />
                    </label>
                    <label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        />
                    </label>
                    <div>
                    <input
                        className='submitbutton'
                        type="submit"
                        name="Register"
                    />
                    </div>
                </form>
            </div>
        </>

    )
}

export default UserRegister