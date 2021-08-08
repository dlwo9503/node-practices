const dotenv = require('dotenv');
const path = require('path');
const assert = require('assert').strict;
dotenv.config({path:path.join(path.resolve(__dirname,'..'), 'config/db.env')});

describe('Fetch User(no=1)', function() {
    let models = null;
    before(async function() {
        models = require('../models');
    });
    it('Test!!!!!', async function() {
        const user = await models.User.findOne({
            where: {
                no: 1
            }
        });
        assert.equal(user.no, 1);
    });
    after(async function(){
        console.log();
    });
});
