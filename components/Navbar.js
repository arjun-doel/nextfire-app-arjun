/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import { UserContext } from '../libs/context';
import { useContext } from 'react';

export default function Navbar() {

  const { user, username } = useContext(UserContext)


  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>

        {/* When User is signed in */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} alt="profile-pic"/>
              </Link>
            </li>
          </>
        )}

        {/* When user is logged off */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}