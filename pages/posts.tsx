import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }  

export default function Posts({ allPostsData }) {
    return <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <Link href='/' className='font-bold'>↻ Back to Homepage</Link>
      <p>
      Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25
      as a religious and cultural celebration among billions of people around the world.A feast central to 
      the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season 
      of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night.
      </p>
    </section>

    {/* Add this <section> tag below the existing <section> tag */}
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Christmas 2023 articles</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
}