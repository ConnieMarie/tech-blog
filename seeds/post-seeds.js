const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    contents: 'In aliquip occaecat incididunt sunt eu.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'Est ea magna irure et fugiat fugiat voluptate qui sunt.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel.',
    contents: 'Officia sint commodo dolore nulla laborum ipsum ea dolor aliquip.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    contents: 'Minim pariatur proident fugiat consequat ipsum dolore aliqua ullamco.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    contents: 'Excepteur ad aliqua magna voluptate anim officia minim laborum ut.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    contents: 'Dolore irure nulla eu ullamco cupidatat adipisicing ex deserunt irure culpa dolore ut.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Et officia anim tempor qui aute adipisicing culpa ipsum. Enim qui dolore minim deserunt.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'Culpa nulla laboris nulla incididunt aute.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    contents: 'Tempor in esse consectetur laborum. Magna nulla occaecat aute enim anim in nulla non eu sunt anim nisi laborum. ',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    contents: 'Aliquip do in est pariatur excepteur ad. Nisi occaecat non culpa elit mollit dolor nostrud culpa laborum ut.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Sunt cillum officia cupidatat duis voluptate. Non exercitation amet anim ut nostrud nostrud voluptate magna id duis voluptate enim mollit.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    contents: 'Est minim exercitation eiusmod aliqua magna anim eiusmod laboris officia proident. Ullamco eiusmod incididunt fugiat adipisicing ipsum aliquip minim ipsum occaecat.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    contents: 'Minim aute minim non cupidatat sint dolore magna sunt nulla adipisicing.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    contents: 'Ad ipsum irure proident proident. Aliquip velit Lorem qui adipisicing laboris. Aliqua et excepteur ea nisi anim.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate.',
    contents: 'Adipisicing nostrud consequat veniam occaecat ut.',
    user_id: 3
  },
  {
    title:'Dolore elit do reprehenderit aute elit aute velit.',
    contents: 'Cillum labore Lorem dolore exercitation cupidatat. Irure laboris irure consequat fugiat reprehenderit laborum exercitation dolor.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    contents: 'Ullamco occaecat ex amet excepteur consequat nisi deserunt eiusmod do adipisicing officia.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    contents: 'In cillum occaecat occaecat cillum quis id. Tempor labore officia nisi pariatur nisi irure id aute exercitation tempor est officia sit culpa.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    contents: 'Proident sunt magna quis exercitation enim tempor commodo Lorem sit eiusmod fugiat commodo. Amet dolor eu laborum esse labore ipsum.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    contents: 'Quis minim dolor aute nulla do eu nisi sunt incididunt deserunt. Aliquip fugiat labore amet nulla mollit esse eiusmod sint.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;