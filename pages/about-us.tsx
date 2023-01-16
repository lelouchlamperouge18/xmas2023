/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../components/header";

import { Col, Row } from 'antd';

const proud_moments = {
  title: `The journey to making better things in a better way is a long one, and we're just getting started. Here are a few of our proudest moments so far:`,
  items: [
    {
      title: "B CORP",
      image:
        "https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/2M7UpRvmXfFNxZNIT0saGR/8b8043013d1f3887772b9ca0ac695376/our-story-waterfall.jpg",
      description:
        "As a certified B Corp, we do business differently. The environment is a stakeholder here, and how we treat it is just as important as the bottom line.",
    },
    {
      title: "SOLES4SOULS®",
      image:
        "https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/5S1JAhGoqwZ5gfAVtrttah/7891fa77f617b9611d3c602e45110aa9/our-story-shoes.jpg",
      description:
        "Thanks to our friends at Soles4Souls®, lightly used Allbirds find new life all around the world, helping communities in need thrive in the process.",
    },
    {
      title: "RECYCLED PACKAGING",
      image:
        "https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/2BmncxWMB6tlRj056ROYOk/edf439eaae0bab05a45152eab6b4f88c/Our_Story_Shoebox.jpg",
      description:
        "We reimagined shoe packaging, using 90% post-consumer recycled cardboard that serves as a shoebox, shopping bag, and mailer all in one.",
    },
  ],
};

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Xmas-Zone 2023</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="relative">
        <img
          src="/about-us/IMG_9622.jpg"
          alt="background"
          className="h-[95vh] w-full"
        />
        <div className="absolute top-[12%] left-[10%] w-[30%] h-[70%] bg-white text-black p-20 overflow-hidden">
          <div className="text-xl pb-4">Hi!</div>
          <div className="text-5xl font-bold italic pb-4">I&apos;m Havertz</div>
          <div className="text-xl">
            My hunch is someone you trust mentioned my name, or you stumbled
            upon one of my videos, quotes or articles online. Whatever path you
            took, I&apos;m really glad you&apos;re here. This site is full of
            incredible resources and ideas that can help you enjoy Christmas.
            Here&apos;s a quick lay of the land so you can find what you&apos;re
            looking for and we can start something beautiful together. <br></br>
            <br></br>
            Merry Christmas!
          </div>
        </div>
      </div>
      <div className="m-auto">
        <div className="flex justify-center py-20">
          <div className="w-1/2 text-center text-5xl font-semibold">
            {proud_moments.title}
          </div>
        </div>
        <div className="flex justify-center text-center px-[10%] text-2xl">
            {proud_moments.items.map((item, key) => (
              <div className="flex-[33%] max-w-[33%] px-8 pb-8">
                <img src={item.image} alt="item-image" width="100%" height="auto" />
                <div className="py-6 text-3xl font-bold">
                  {key+1} {item.title}{" "}
                </div>
                <div> {item.description} </div>
              </div>
            ))}
          </div>
      </div>
      <div className="relative pt-10">
        <video src="/about-us/snow-fall.mp4" autoPlay muted loop height={500} width="100%" />
        <div className="absolute top-[55%] left-[20%] text-9xl font-semibold origin-top-left -rotate-12 text-gray-100 text-center tracking-wider">
          WE WISH YOU A <br></br> MERRY CHRISTMAS
        </div>
      </div>
      <div className="py-10 px-[20%]">
        <Row gutter={[16, 16]} className="flex items-center">
          <Col xs={24} sm={24} md={12} lg={15} xl={15}>
            <div className="border border-1 px-10 py-20 bg-[#fff2f1] text-black">
              <div className="text-center text-5xl underline italic">1.</div>
              <div className="text-center text-xl py-4">Want to know more about me?</div>
              <div>
                I&apos;m an entrepreneur, writer, philanthropist and an unshakable optimist dedicated to helping you become the person you most want to be. If you&apos;re curious about my background and how I came to do what I do, get the full scoop on my about page.
                <br></br>
                <br></br>
                Kiddie scoop: I&apos;m a born and raised Jersey girl (fist pump!) who now calls New York City home. I&apos;m an obsessive learner who spends time reading, writing, producing and hosting MarieTV, creating and selling the world&apos;s best online educational programs, running a socially-conscious digital company, and ironically — spending as much time offline as possible.
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={9} xl={9}>
            <div className="border border-1 p-10 bg-[#272c22] text-white">
              I&apos;m an entrepreneur, writer, philanthropist and an unshakable optimist dedicated to helping you become the person you most want to be. If you&apos;re curious about my background and how I came to do what I do, get the full scoop on my about page.
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={9} xl={9}>
            <div className="border border-1 p-10 bg-[#272c22] text-white">
              I&apos;m an entrepreneur, writer, philanthropist and an unshakable optimist dedicated to helping you become the person you most want to be. If you&apos;re curious about my background and how I came to do what I do, get the full scoop on my about page.
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={15} xl={15}>
            <div className="border border-1 px-10 py-20 bg-[#fff2f1] text-black">
              <div className="text-center text-5xl underline italic">2.</div>
              <div className="text-center text-xl py-4">Looking to watch some MarieTV?</div>
              <div>
                Our award-winning show is guaranteed to make you wiser, happier and younger. OK, not younger. But definitely wiser and happier.
                <br></br>
                <br></br>
                Find our most recent episodes here or binge-watch our Collections.
                <br></br>
                <br></br>
                All this and more over at the full MarieTV library. With hundreds of episodes and counting, an inspiring world of growth and entertainment awaits you.
              </div>
            </div>
          </Col> 
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="text-center text-5xl underline italic">3.</div>
            <div className="text-center text-xl py-4">Don&apos;t just take my word for it</div>
            <div className="text-center">
              The miracle of the internet has allowed me to reach millions around the world. I hold that as an extraordinary honor.
              <br></br>
              <br></br>
              I&apos;m amazed and moved by countless people who tell me that this work likes our show, book, online training programs, community, emails, etc. has sparked and sustained a profound and meaningful change in their life.
              <br></br>
              <br></br>
              Our work opens people up emotionally, spiritually and creatively. It inspires people to make bold and courageous moves, take action on long-held dreams and live lives they once only imagined.
              <br></br>
              <br></br>
              Curious what might be in store for you? Find powerful stories from our community right here.
            </div>
          </Col>   
        </Row>
      </div>
    </>
  );
}
