import Head from 'next/head'
import Link from 'next/link'
import { fetcher } from '../util'
import { useSWRInfinite } from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from '../components/Post'
import styled from 'styled-components'
import breakpoints from '../util/breakpoints'

export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher('/posts', 1, 20)
  return { props: { posts } }
}

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return ['/posts', pageIndex + 1, 10]
}

const PageWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f2f2f2;
`
const ListWrapper = styled.div`
  @media (min-width: ${breakpoints.xl}px) {
    max-width: 670px;
    margin: 0 auto;
  }
`
const List = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media (min-width: ${breakpoints.xl}px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: -30px 0 0 -30px;
  }
`
const ListItem = styled.li`
  margin: 40px 0 0 0;
  @media (min-width: ${breakpoints.xl}px) {
    width: 320px;
    margin: 30px 0 0 30px;
  }
`
const ALink = styled.a`
  display: block;
  @media (min-width: ${breakpoints.xl}px) {
    height: 100%;
  }
`

export default function Home({ posts }) {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialSize: 2,
    initialData: [posts],
  })
  if (!data) return 'loading'

  return (
    <PageWrapper>
      <Head>
        <title>Posts</title>
        <meta name="description" content="posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfiniteScroll
        dataLength={data.flat().length}
        next={() => setSize(size + 1)}
        hasMore={data[data.length - 1].length > 0}
        loader={<p>Loading...</p>}
      >
        <ListWrapper>
          <List>
            {data.map(function mapPostsEveryPagination(posts) {
              return posts.map(function mapPostsToElement(post) {
                return (
                  <ListItem key={post.id}>
                    <Link href={`/post/${post.id}`} passHref>
                      <ALink>
                        <Post
                          id={post.id}
                          title={post.title}
                          body={post.body}
                        />
                      </ALink>
                    </Link>
                  </ListItem>
                )
              })
            })}
          </List>
        </ListWrapper>
      </InfiniteScroll>
    </PageWrapper>
  )
}
