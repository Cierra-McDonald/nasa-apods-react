import request from 'superagent'

const URL = 'http://localhost:3000';

export async function signUpNewUser(email, password) {
    
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email: email,
            password: password
        })

        return response.body;


}

export async function loginExistingUser(email, password) { 

    const response = await request.post(`${URL}/auth/signin`)
        .send({
            email: email,
            password: password
        })

        return response.body;

}

