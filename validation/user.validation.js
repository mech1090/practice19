const Joi = require('joi')

const userValidation = (data)=>{
    const userSchema = Joi.object({
        email:Joi.string().min(8).max(32).required(),
        password:Joi.string().min(6).max(32).required()
    })
    const {error,value} = userSchema.validate(data)
    return {error,value}
}

module.exports = {userValidation}