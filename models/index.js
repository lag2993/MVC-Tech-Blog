const User = require('./user');
const Post  = require('./post');
const Comment = require('./comment');


// Belong
Post.belongsTo(User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment,{
    foreignKey:"postId",
    onDelete: 'CASCADE'
});

module.exports = {User,Post,Comment};

