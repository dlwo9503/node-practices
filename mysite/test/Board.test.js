const dotenv = require('dotenv');
const path = require('path');
const should = require('chai').should();

dotenv.config({path:path.join(path.resolve(__dirname,'..'), 'config/db.env')});

describe('Model Board', function() {
    let models;
    let user;

    before(async function() {
        models = require('../models');
        user = await models.User.create({
            name: 'testUser',
            email: 'testUser@mysite.com',
            password: '1234',
            gender: 'male'
        })
    });

    it('Create 3 Boards', async function() {
        let board;
        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            userNo: user.no
        })
        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            userNo: user.no
        })
        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            userNo: user.no
        })
        board.no.should.not.equals(undefined);
    });

    it("Fetch Boards by user(test)", async function() {
        const results = await models.Board.findAll({
            where: {
                userNo: user.no
            },
            include: { // join
                model: models.User,
                require: true
            }
        })
        results.should.have.lengthOf(3);
    })
    after(async function(){
        await models.Board.destroy({ // 보드 데이터 삭제
            where: {
                userNo: user.no
            }
        })
        await models.User.destroy({ // 유저 데이터 삭제
            where: {
                no: user.no
            }
        })
    });
});
