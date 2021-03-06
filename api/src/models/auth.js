export default (sequelize, DataTypes) => {
  const Auth = sequelize.define('auth', {
    pubKey: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      // cannot reference because on time of save user not in db yet
      // references: {
      //   model: sequelize.models.user,
      //   key: 'pubKey',
      // },
    },
    salt: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    iv: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // private key encrypted with hashed password
    encrypted_private_key: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });


  return Auth;
};

