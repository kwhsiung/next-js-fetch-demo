import { fetcher } from '../../util'
import Post from '../../components/Post'
import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'

export async function getStaticPaths() {
  const posts = await fetcher('/posts', 1, 20)
  const paths = posts.map(function (post) {
    return { params: { id: `${post.id}` } }
  })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const post = await fetcher(`/posts/${params.id}`)
  return {
    props: { post },
  }
}

const PageWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
`
const BackToHomeLink = styled.a`
  display: block;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.06);
  padding: 10px;
  margin: 10px 0 0 0;
  background-color: white;
  border-radius: 6px;
  color: blue;
  text-align: center;
`

export default function PagePost({ post }) {
  return (
    <PageWrapper>
      <Head>
        <title>Post {post.id}</title>
        <meta name="description" content="post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post id={post.id} title={post.title} body={post.body} />
      <Link href="/" passHref prefetch={false}>
        <BackToHomeLink>back to home</BackToHomeLink>
      </Link>
    </PageWrapper>
  )
}
