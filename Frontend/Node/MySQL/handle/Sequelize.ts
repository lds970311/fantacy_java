import {DataTypes, Sequelize} from "sequelize"
import * as path from "path"
import * as fs from "fs"

const useSequelize = async () => {
// 方法 3: 分别传递参数 (其它数据库)
    const sequelize = new Sequelize('nodejs', 'root', '19970311', {
        host: '192.168.208.144',
        dialect: 'mysql'
    });
    try {
        await sequelize.authenticate();
        console.log('连接成功!');
    } catch (error) {
        console.error('连接失败!:', error);
    }

    const Product = sequelize.define('Product', {
        //里定义模型属性
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
        },
        brand_id: {
            type: DataTypes.INTEGER,
        },
        pid: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        },
        score: {
            type: DataTypes.DECIMAL(2, 1)
        },
        title: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.STRING,
        },
        voteCnt: {
            type: DataTypes.INTEGER,
        }
    }, {
        createdAt: false,
        updatedAt: false,
    })
    console.log(Product === sequelize.models.Product)
    //查询所有商品
    const products = await Product.findAll({
        attributes: ['brand', 'price', 'score', 'title', 'url', 'voteCnt']
    })
    // writeData(products)
    console.log("all products:", products)
    //关闭连接
    await sequelize.close()
}

const writeData = (data: any): void => {
    const destPath = path.resolve(__dirname, 'data.txt')
    fs.writeFile(destPath, data, err => {
        if (err) {
            console.log(err!)
            return
        }
        console.log("write success")
    })
}

useSequelize()
