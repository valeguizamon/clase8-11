'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      brandsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brands',
          key:'id'
        }
      },
      categoriesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key:'id'
        }
      },
      sizesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sizes',
          key:'id'
        }
      },
      visibilitesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'visibilities',
          key:'id'
        }
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};