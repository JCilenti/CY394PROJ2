module.exports = function(sequelize, DataTypes) {
    var Thursday = sequelize.define("Thursday", {
      Thursday: {
        type:DataTypes.STRING,
        allowNull:false
      }, 
      shiftStartTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      shiftEndTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      lunchStartTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      },
      lunchEndTime: {
        type: DataTypes.STRING, 
        allowNull: false,
        len:4
      }
    });
    Thursday.associate = function(models) {
    
      Thursday.belongsTo(models.Employee, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'CASCADE',
        hooks: true
      });
    };
  
    return Thursday;
  };
  