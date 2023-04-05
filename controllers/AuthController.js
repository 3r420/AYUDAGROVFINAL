 const express = require('express');
 const  router = express.Router();
 const user =require('../models').Usuario
 const bcrypt =require('bcrypt');
 const jwt = require ('jsonwebtoken');
 const authConfig=require('../config/auth');
const { BaseError } = require('sequelize');


 module.exports={

    //login
    login(req,res){
        let {correo_electronico, contrasena} = req.body;
        //buscar usuario
        user.findOne({
            where:{
                correo_electronico:correo_electronico
            }
        }).then(user=>{
            if(!user){
                res.status(404).json({msg:"No se encontro ningun usuario registrado con este correo"});

            } else{
                if(bcrypt.compareSync(contrasena, user.contrasena)){
                    //reamos token
                    let token =jwt.sign({user:user},authConfig.secret,{
                        expiresIn:authConfig.expires
                    });
                     res.json({
                        user:user,
                        token:token
                     });
                }else {
                    res.status(401).json({msg:"Contraseña incorrecta"})
                }
            }
        }).catch(err =>{
            res.status(400).json(err);
        })


    },

    //registro
    registro(req,res){
        //encriptamos contraseña
       
        let contrasena =bcrypt.hashSync(req.body.contrasena,authConfig.rounds);
       //crear user
         user.create({
            rol_id:req.body.rol_id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo_electronico: req.body.correo_electronico,
            contrasena:contrasena,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            estado: req.body.estado
        }).then(user=>{
            //creamos token
            let token =jwt.sign({user:user},authConfig.secret,{
                expiresIn:authConfig.expires
            });
             res.json({
                user:user,
                token:token
             });
        }).catch(err=>{
            res.status(400).json(console.error(err));
        })
    },
 }