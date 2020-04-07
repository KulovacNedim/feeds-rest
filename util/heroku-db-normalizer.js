const path = require('path');

const Post = require(path.join(__dirname, '../models/post'));

module.exports = async function () {
    const post1 = new Post({
        title: 'Desktop PC',
        content: 'Dell desktop PC - business class!',
        imageUrl: 'images\\1586267413567-desk.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T13:50:13.617+00:00',
        updatedAt: '2020-04-07T13:50:13.617+00:00'
    });
    const post2 = new Post({
        title: 'Monitor 24',
        content: 'Dell Monitor 24 inches!',
        imageUrl: 'images\\1586267478871-monitor.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T13:51:18.877+00:00',
        updatedAt: '2020-04-07T13:51:18.877+00:00'
    });
    const post3 = new Post({
        title: 'External HDD',
        content: '1 TB external HDD',
        imageUrl: 'images\\1586267529885-hdd.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T13:56:18.049+00:00',
        updatedAt: '2020-04-07T13:56:18.049+00:00'
    });
    const post4 = new Post({
        title: 'My new mobile',
        content: 'My new cool phone :)',
        imageUrl: 'images\\1586267658023-phone.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T13:54:18.028+00:00',
        updatedAt: '2020-04-07T13:54:18.028+00:00'
    });
    const post5 = new Post({
        title: 'Do you have experience with Dell laptops?',
        content: 'Hi, all! I need a new laptop and I want this one... so, any thoughts?',
        imageUrl: 'images\\1586267957110-laptop.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T13:59:17.115+00:00',
        updatedAt: '2020-04-07T13:59:17.115+00:00'
    });
    const post6 = new Post({
        title: 'Which graphic card to buy?',
        content: 'All suggestions are welcome!',
        imageUrl: 'images\\1586268039017-graph.jpg',
        creator: '5e8c822890de3aa8cd2aee7a',
        createdAt: '2020-04-07T15:16:29.039+00:00',
        updatedAt: '2020-04-07T15:16:29.039+00:00'
    });
    await Post.deleteMany({});
    await Post.collection.insertMany([post1, post2, post3, post4, post5, post6]);
};
