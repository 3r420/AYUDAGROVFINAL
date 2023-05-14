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
        let {correo_electronico, contrasena,rol_id} = req.body;
        console.log("aki esta el id "+rol_id)
        //buscar usuario
        user.findOne({
            where:{
                correo_electronico:correo_electronico
            }
        }).then(user=>{
            if(!user){
                res.status(200).json({msg:"No se encontro ningun usuario registrado con este correo", status:"error"});

            } else{
                console.log(user.rol_id)
                if(bcrypt.compareSync(contrasena, user.contrasena)&& user.rol_id==1){
                    //reamos token
                    let token =jwt.sign({user:user},authConfig.secret,{
                        expiresIn:authConfig.expires
                    });
                     res.json({
                        user:user,
                        token:token
                     });
                }else {
                    res.status(200).json({msg:"Contraseña incorrecta",status:"error" })
                }
            }
        }).catch(err =>{
            res.status(200).json(err);
        })


    },
    loginrol2(req,res){
        let {correo_electronico, contrasena,rol_id} = req.body;
        console.log("aki esta el id del admin "+rol_id)
        //buscar usuario
        user.findOne({
            where:{
                correo_electronico:correo_electronico
            }
        }).then(user=>{
            if(!user){
                res.status(200).json({msg:"No se encontro ningun usuario registrado con este correo", status:"error"});

            } else{
                if(bcrypt.compareSync(contrasena, user.contrasena)&& user.rol_id==2){
                    //reamos token
                    let token =jwt.sign({user:user},authConfig.secret,{
                        expiresIn:authConfig.expires
                    });
                     res.json({
                        user:user,
                        token:token
                     });
                }else {
                    res.status(200).json({msg:"Contraseña incorrecta",status:"error" })
                }
            }
        }).catch(err =>{
            res.status(200).json(err);
        })


    },
    loginrol3(req,res){
        let {correo_electronico, contrasena,rol_id} = req.body;
        console.log("aki esta el id "+rol_id)
        //buscar usuario
        user.findOne({
            where:{
                correo_electronico:correo_electronico
            }
        }).then(user=>{
            if(!user){
                res.status(200).json({msg:"No se encontro ningun usuario registrado con este correo", status:"error"});

            } else{
                if(bcrypt.compareSync(contrasena, user.contrasena)&& user.rol_id==3){
                    //reamos token
                    let token =jwt.sign({user:user},authConfig.secret,{
                        expiresIn:authConfig.expires
                    });
                     res.json({
                        user:user,
                        token:token
                     });
                }else {
                    res.status(200).json({msg:"Contraseña incorrecta",status:"error" })
                }
            }
        }).catch(err =>{
            res.status(200).json(err);
        })


    },

    //registro
    registro(req,res){
        //encriptamos contraseña
        let {rol,nombre,apellido,correo_electronico,contrasena,telefono,direccion,estado}=req.body
    
        let contrasenas =bcrypt.hashSync(req.body.contrasena,authConfig.rounds);
        
       //crear user
       return   user.create({
            rol_id:rol,
            nombre: nombre,
            apellido:apellido,
            correo_electronico:correo_electronico,
            contrasena:contrasenas,
            telefono:telefono,
            direccion:direccion,
            estado:estado
        }).then(user=>{
            //creamos token
            // let token =jwt.sign({user:user},authConfig.secret,{
            //     expiresIn:authConfig.expires
            // });
             res.json({
                // user:user,
                // token:token
                user
        });
        }).catch(err=>{
            res.status(400).json(console.error(err));
        })
    },

    rescuperar(req,res){
        let {correo_electronico} = req.body;
        //buscar usuario
        user.findOne({
            where:{
                correo_electronico:correo_electronico
            }
        }).then(user=>{
            if(!user){
                res.status(404).json({msg:"No se encontro ningun usuario registrado con este correo", });

            } else{res.json({
                user:correo_electronico
            })}

        }).catch(err =>{
            res.status(400).json(err);
        })


    },
 }