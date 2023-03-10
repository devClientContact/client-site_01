import type { NextPage } from 'next';
import Head from 'next/head';
import Title from '../components/Title';
import LinkList from '../components/LinkList';

import styles from '../styles/Main.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
			<Head>
				<title>Adam Serpa - Ghost Out West</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
    		<Title />
    		<LinkList />
			</main>
    </div>
  );
};

export default Home;
