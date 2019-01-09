import Link from 'next/link';
import Router from 'next/router';

const UserList = props => (
    <div>
        {
            props.users.map(user => (
                <div key={user.id}>
                    <Link  key={user.id} href={`/user?name=${user.username}`} as={`/@/${user.username}`}>
                        <a
                            onMouseEnter={() => { Router.prefetch(`/user?name=${user.username}`); console.log('prefetching..') }} // mouse üzzerinde ise hemen yüklenme yapar
                            className="username">{user.name}</a>
                    </Link>
                </div>
            ))
        }

    </div>
);

export default UserList;