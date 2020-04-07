const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
const path = require('path');

const User = require(path.join(__dirname, '../models/user'));
const AuthController = require('../controllers/auth');

describe('Auth Controller', function () {
    before(function (done) {
        mongoose.connect(
            `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-muewd.mongodb.net/${process.env.MONGO_TEST_DATABASE}?retryWrites=true&w=majority`
        )
            .then(result => {
                const user = new User({
                    email: 'test@test.com',
                    password: 'tester',
                    name: 'Test',
                    posts: [],
                    _id: '5c0f66b979af55031b34728b'
                });
                return user.save();
            })
            .then(() => {
                done();
            });
    });

    it('should throw an error with code 500 if accessing database fails', function (done) {
        sinon.stub(User, 'findOne');
        User.findOne.throws();

        const req = {
            body: {
                email: 'test@test.com',
                password: 'tester'
            }
        };

        AuthController.login(req, {}, () => {
        })
            .then(result => {
                expect(result).to.be.an('error');
                expect(result).to.have.property('statusCode', 500);
                done();
            })

        User.findOne.restore();
    });

    it('should send a response with a valid user status for existing user', function (done) {
        const req = {
            userId: '5c0f66b979af55031b34728b'
        };
        const res = {
            statusCode: 500,
            userStatus: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.userStatus = data.status;
            }
        };
        AuthController.getUserStatus(req, res, () => {
        })
            .then(() => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.userStatus).to.be.equal('I am new!');
                done();
            });
    });

    after(function (done) {
        User.deleteMany({})
            .then(() => {
                mongoose.disconnect();
            })
            .then(() => {
                done();
            });
    });
});
