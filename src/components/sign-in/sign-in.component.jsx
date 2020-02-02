import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            email: '',
            password: ''
        }


    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '' , password: ''})
    }
    handleChange = (event) => {
        const { value , name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>Mam już konto</h2>
                <span>Zaloguj się!</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="E-mail" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" label="Hasło" value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                    <CustomButton type="submit">Zaloguj!</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>logowanie Google!</CustomButton>
                    </div>
                </form>

            </div>
            
        )
    }
}
export default SignIn;