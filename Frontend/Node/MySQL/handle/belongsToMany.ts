//数据表间多对多关系
import {DataTypes, ModelCtor, Sequelize} from "sequelize"

const sequelize = new Sequelize('nodejs2', 'root', '19970311', {
    host: '192.168.208.144',
    dialect: 'mysql'
});

sequelize.authenticate().then(res => {
    console.log('连接成功!');
}).catch(err => {
    console.log("连接失败,err")
})


const Student: ModelCtor<any> = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: DataTypes.INTEGER,
    },
    {
        tableName: "students",
        createdAt: false,
        updatedAt: false,
        modelName: "Student"
    })


// Course
const Course: ModelCtor<any> = sequelize.define('Course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: DataTypes.DOUBLE,
    },
    {
        tableName: "courses",
        createdAt: false,
        updatedAt: false,
        modelName: "Courses"
    })


const StudentCourse: ModelCtor<any> = sequelize.define("StudentCourse", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        studentId: {
            type: DataTypes.INTEGER,
            references: {
                model: Student,
                key: "id",
            },
            field: "student_id",
        },
        courseId: {
            type: DataTypes.INTEGER,
            references: {
                model: Course,
                key: "id",
            },
            field: "course_id",
        },
    },
    {
        tableName: "students_select_courses",
        createdAt: false,
        updatedAt: false,
        modelName: "StudentCourse"
    })


// 多对多关系的联系
Student.belongsToMany(Course, {
    through: StudentCourse,
    foreignKey: "studentId",
    otherKey: "courseId",
});

Course.belongsToMany(Student, {
    through: StudentCourse,
    foreignKey: "courseId",
    otherKey: "studentId",
});

async function queryProducts() {
    const result = await Student.findAll({
        include: {
            model: Course
        }
    });
    console.log(result);
}

queryProducts();
