const database=require("mysql");


const conexiones=database.createPool({
connectionLimit:20,
    host:"localhost",
    user:"postgres",
    password:"",
    database:"myphone_callhistory_v14",
    port:5432


});


const createConeccionUpdate=()=>{

    return new Promise((resolve, reject)=>{

        conexiones.getConnection((error,connection)=>{

            if (error) return reject("Not Connection Whith Database");

            else resolve(connection);

        });

    });

};


createConeccionUpdate().then(test=>console.log(test)).catch(test=>console.log(test));
