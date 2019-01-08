import React from 'react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Bitfaced - Pop Culture and Gaming Podcast</title>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="http://bitfaced.com" />
      <meta name="og:title" content="BitFaced Podcast" />
      <meta name="msvalidate.01" content="397DC1B89F47E94AE576233E3E3D298B" />
      <meta name="google-site-verification" content="Skr1DY0RuQrohFqXu5sk0WcMzZp-OVC7inox9ihM0ng" />
      <meta name="Description" content="BitFaced - The greatest pop culture podcast no one is listening to" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="author" content="Eric G. Hollis & Tyler R. Glaze" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>
      {
      `body, html, #__next { 
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 0px;
        margin: 0px;
        overscroll-behavior: contain;
      }

      body {
        background: url(https://s3.us-east-2.amazonaws.com/bfpc/345632_8-bit-mario-wallpapers-wallpapers-cave_1024x640_h.webp);
        background-size: cover;
        background-position-y: -180px;
      }
    `}
    </style>
  </div>
);
