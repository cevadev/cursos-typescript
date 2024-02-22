import { User, Roles } from './01-enum';

const currentUser: User = {
  username: 'barcvilla',
  role: Roles.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === Roles.ADMIN) {
    return true;
  } else {
    return false;
  }
};

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === Roles.ADMIN) {
    return true;
  }
  if (currentUser.role == Roles.SELLER) {
    return true;
  }
  return false;
};

export const checkRoleWithArray = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

export const checkRoleWithRestParams = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log(`El usuario ${currentUser.username} es Admin? ${checkAdminRole()}`);
console.info(
  `El usuario ${currentUser.username} es Admin o Seller? ${checkRole(
    Roles.ADMIN,
    Roles.SELLER
  )}`
);

console.info(
  `El usuario ${currentUser.username} es Admin o Seller? ${checkRoleWithArray([
    Roles.ADMIN,
    Roles.SELLER,
  ])}`
);

console.info(
  `El usuario ${
    currentUser.username
  } es Admin o Seller? ${checkRoleWithRestParams(Roles.ADMIN, Roles.SELLER)}`
);

console.info(
  `El usuario ${
    currentUser.username
  } es Admin o Seller? ${checkRoleWithRestParams(Roles.CUSTOMER)}`
);
