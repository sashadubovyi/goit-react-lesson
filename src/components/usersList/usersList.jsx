// const UsersList = ({users}) => {
//     const elements = users.map(({id ,name , username , email , avatarUrl , address:{street, city}}) => {
//         return <li key={id} >
//             <p>Name: {name}</p>
//             <p>UserName: {username}</p>
//             <p>email: {email}</p>
//             <img src={avatarUrl}/>
//             <p>address:{street},{city} </p>
//         </li>
//     })
import PropTypes from 'prop-types';
import { UserItem } from '../User/UserItem';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
