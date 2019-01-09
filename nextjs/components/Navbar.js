import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/"><a>Home</a></Link>
        &nbsp;
         <Link href="/users"><a>Users</a></Link> <hr />
    </div>
)

export default Navbar;