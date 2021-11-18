/*
 * @Author: huangzuqiang
 * @Date: 2021-11-15 10:20:53
 * @LastEditTime: 2021-11-16 10:52:48
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \nextjs-blob\pages\posts\first-post.js
 */
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            </h2>
        </Layout>
    )
}