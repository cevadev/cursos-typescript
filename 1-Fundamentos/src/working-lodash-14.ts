import _ from 'lodash';

const users = [
  {
    username: 'barcvilla',
    role: 'admin',
  },
  {
    username: 'mstrelim',
    role: 'admin',
  },
  {
    username: 'ceva',
    role: 'user',
  },
  {
    username: 'carvi',
    role: 'user',
  },
];

// agrupamos los datos del array por la propiedad role
const rpta = _.groupBy(users, (user) => user.role);

console.info(rpta);
