/**
 * Author: mdemo
 * Date: 13-4-21
 * Time: 下午4:34
 * Desc:  end config
 */
exports.end_config = {
    mongo_config: {
//        mongoURI: 'mongodb://mdemo:yuchen12@alex.mongohq.com:10009/nodend',
        mongoURI: 'mongodb://localhost:27017/nodend',
        options: {
            auto_reconnect: true
        }
    },
    sio_config: {
        port: 8080,
        options: {
            'log level': 1
        }
    },
    tokenSecurt: '74c1d19b451d4e38bf503ad20b89a7d9',
    email_config: {
        host: 'smtp.gmail.com',
        user: 'mengdesen@gmail.com',
        password: 'chen12!@',
        from: 'End.js <mengdesen@gmail.com>',
        resetURL: 'http://localhost:3000/reset'
    }
};
