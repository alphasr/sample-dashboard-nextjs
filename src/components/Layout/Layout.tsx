import SideMenu from '@/components/SideMenu';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import scss from './Layout.module.scss';

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Academia Classic - Data Dashboard</title>
        <meta name='description' content='Data Dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={scss.layout}>
        {session && <SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;
