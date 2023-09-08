const jwt = require('jsonwebtoken');
const SECRET_KEY = 'THISISISECRETKEY';

const authenticateUser = (req, res, next) => {
    if (req.cookies.jwt) {
      try {
        const decoded = jwt.verify(req.cookies.jwt, SECRET_KEY);
        req.isAuthenticated = true
        req.user = decoded; 
        next();
      } catch (error) {
        return res.json({ message: 'User is not verified' });
      }
    } else {
      return res.json({ message: 'User is not logged in' });
    }
  };
// const authenticateUser = (req, res, next) => {
//   const authorizationHeader = req.headers['authorization'];
//   if (!authorizationHeader) {
//     return res.status(401).send('Unauthorized');
//   }

//   const token = authorizationHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     req.isAuthenticated = true;
//     next();
//   } catch (error) {
//     return res.status(401).send('Unauthorized');
//   }
// };
module.exports = authenticateUser;

// const authenticateUser = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY); 
//     console.log('Decoded Token:', decoded);
//     req.user = decoded.user;
//     next();

//   } catch (error) {
//     console.error('Token Verification Error:', error);
//     res.status(403).json({ message: 'Invalid token.' });  }
// };





  
// const authenticateUser = (req, res, next) => {
//     if(req.cookies.login){

//         let isVerified=jwt.verify(req.cookies.login,SECRET_KEY);
//         if(isVerified){
//             next();
//         }else{
//             return res.json({
//                 message: 'User is not verified',
//               });
//         }
       
//     }
//     else{
//         return res.json({
//             message: 'User is not logged in',
//                   });
//     }
// };



