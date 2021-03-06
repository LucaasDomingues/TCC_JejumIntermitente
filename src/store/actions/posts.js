import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'


export const addPost = post =>{
     
    return dispatchEvent =>{
        //https://us-central1-jejum-intermitente-bcbbd.cloudfunctions.net/uploadImage
        axios({
            url:'uploadImage',
            baseURL: 'https://us-central1-jejum-intermitente-bcbbd.cloudfunctions.net/uploadImage',
            method:  'post',
            data: {
                image: post.image.base64
            }
        })

        .catch(err => console.log(err))
        .then(resp => {
            post.image = resp.data.imageUrl
            axios.post('/posts.json', {...post })
            .catch(err =>console.log(err))
            .then(res =>console.log(res.data))
        })
        
    }

    //return {
      //  type: ADD_POST,
        //payload: post
    //}
}

export const addComment = payload =>{
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}