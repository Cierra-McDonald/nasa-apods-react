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

export async function getApodsByDate(query) { 
    
    const response = await request.get(`${URL}/apods?date=${query}`)

    return response.body;
}

export async function addApodToFavorites(token, apod) { 

    const response = await request.post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(apod)

    return response.body;
}

export async function getApodFavorites(token) { 

    const response = await request.get(`${URL}/api/favorites`)
        .set('Authorization', token)
        
        return response.body;
}

export async function deleteApodFavorite(token, picId) { //need to add something, not sure what yet

    const response = await request.delete(`${URL}/api/favorites/${picId}`)
        .set('Authorization', token)
        .send(picId)

        return response.body
}

