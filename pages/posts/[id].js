import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getAllPostIds,getPostData  } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'

// 动态路由文件
// 如果 pages/posts/[...id].js
// 必须这样返回路由id  params: {
//    // Statically Generates /posts/a/b/c
//     id: ['a', 'b', 'c']
// }
export default function Post({ postData }) {
    return (
      <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
      </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}