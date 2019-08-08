/*
/* Temorary Solution
*/
export const usersProfiles = [
  {
    //Dev
    email: 'cristopher.troc@cumplo.com',
    profile: 'ADMIN',
  },
   {
    //Dev
    email: 'gustavo.arzola@cumplo.com',
    profile: 'ADMIN',
  },
  {
    email: 'yaeko.ogino@cumplo.com',
    profile: 'ADMIN',
  },
  {
    email: 'kenneth.peet@cumplo.com',
    profile: 'ADMIN',
  },
  {
    email: 'jauregui.crespo@cumplo.com',
    profile: 'ADMIN',
  },
  {
    email: 'juanpablo.arevalo@cumplo.com',
    profile: 'ADMIN',
  },
  {
    //Inversionistas
    email: 'javiera.soto@cumplo.com',
    profile: 'INVESTMENTS',
  },
  {
    email: 'javiera.carretero@cumplo.com',
    profile: 'INVESTMENTS',
  },
  {
    //Tesoreria
    email: 'mtaris@cumplo.com',
    profile: 'TREASURY',
  },
  {
    email: 'kantunes@cumplo.com',
    profile: 'TREASURY',
  },
  {
    email: 'barbara.segura@cumplo.com ',
    profile: 'TREASURY',
  },
];

export const getUserPermission = (email) => {
  let userNow = usersProfiles.find((user) => user.email === email);
  if (userNow) {
    return userNow.profile;
  }
  return 'DEFAULT';
};

export default getUserPermission;
