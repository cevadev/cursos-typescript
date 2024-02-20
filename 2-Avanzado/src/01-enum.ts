enum Roles {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: Roles;
};

const barcvilla: User = {
  username: 'Carlos Villanueva',
  role: Roles.ADMIN,
};
