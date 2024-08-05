// import { UserProfile } from '~/app/_components/userProfile/UserProfile'
// import { getServerAuthSession } from '~/server/auth'
// import { HydrateClient } from '~/trpc/server'

export default async function Home() {
  // if (!session) {
  //   return (
  //     <div>
  //       <p>
  //         Welcome to
  //         {' '}
  //         <code>trpc</code>
  //         {' '}
  //         with
  //         {' '}
  //         <code>next-auth</code>
  //         !
  //       </p>
  //       <p>
  //         <Link href="/api/auth/signin">Sign in</Link>
  //         {' '}
  //         to see the latest post.
  //       </p>
  //     </div>
  //   )
  // }

  return (
    <div>
      <p>
        Welcome back,
        {' '}
        {/* <code>{session.user.email}</code> */}
        !
      </p>
      {/* <UserProfile session={session} /> */}
    </div>
  )
}
