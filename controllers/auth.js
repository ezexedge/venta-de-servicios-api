import User from '../models/user'


export const showMessage = (req,res) => {
    res.status(200).send('hola soy el mensaje')
}

export const register = async (req,res)=>{
    
    console.log('------body:   ' ,req.body)
    
    const {name,email,password} = req.body


    if(!name)return res.status(400).send('nombre es obligatorio')
    if(!password || password.length < 6){
        return res.status(400).send('el email es incorrecto o debe ser menor 6')
    }

    let userExist = await User.findOne({email}).exec()

    if(userExist)return res.status(400).send('el email esta registrado')
    
    const user = new User(req.body)
    try{

        await user.save()
        return res.json({ok: true})


    }catch(err){

        return res.status(400).send('error intentalo de nuevo') 


    }

}