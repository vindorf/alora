import {models, model, Schema} from 'mongoose';


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: String,
},
{timestamps: true}
)


const User = models.User || model('User', userSchema);

export default User;