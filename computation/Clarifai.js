export async function classifyImg(imageData) {
    console.log(imageData)
    // Initialise the Clarifai api
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
        apiKey: '6632e6a759324dc6b58b6469a2c7cc1f'
    });
    response = await app.models.predict('recycleIt', { base64: imageData })
    
    console.log(response.outputs[0].data.concepts)
    return response.outputs[0].data.concepts

}