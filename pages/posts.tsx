/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import undraw_Santa_visit_re_oiwr from '/assets/undraw/undraw_Santa_visit_re_oiwr.png'

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
      <Image 
        className='m-auto'
        src={undraw_Santa_visit_re_oiwr} 
        alt="undraw_Santa_visit_re_oiwr" 
        width="500"
      />
      <p className='pt-2'>
      Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25
      as a religious and cultural celebration among billions of people around the world.A feast central to 
      the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season 
      of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night.
      </p>
    </section>

    {/* Add this <section> tag below the existing <section> tag */}
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Christmas 2023 News</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title, author }) => (
          <li className="flex-[33%] max-w-[33.333%] py-4 pr-6" key={id}>
            <Link href={`/posts/${id}`}>
              <img 
                src="https://ak.imgag.com/imgag/product/expressions/3537859/master_580x464.jpg"
                alt="preview-image"
                className='cursor-pointer mb-2 w-full h-[250px] border-b-green-600 border-b-8'
              />
            </Link>
            <Link href={`/posts/${id}`} className="text-xl">
              {title}
            </Link>
            <br />
            <p className='text-sm italic text-gray-500'>By {author} </p>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
}