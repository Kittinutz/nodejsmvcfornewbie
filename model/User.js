module.exports = (sequelize,DataTypes)=>{
    var User = sequelize.define("users",{
        id:{
            type:DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement:true,
            field:'id',
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING,
            field: 'name'
        },
        surname:{
            type: DataTypes.STRING,
            field: 'surname'

        },
        description:{
            type: DataTypes.STRING,
            field: 'description'
        },
        createdAt:{
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
        updatedAt:{
            field: 'update_at',
            type: DataTypes.DATE,
            primaryKey: false,
        }
    });
    return User;
};
