const LoginModel = require('../model/LoginModel');


const showLogin = async(req,res) =>{
    const {usuUsuario,usuPassword} = req.body;
    const response = await LoginModel.showLogin(usuUsuario,usuPassword);
    if(response.length>0){
        res.status(200).json({success: true, usuario: response});
    }else{
        res.status(200).json({success: false, message: 'El usuario no existe'});
    }
    
}


module.exports = {showLogin}