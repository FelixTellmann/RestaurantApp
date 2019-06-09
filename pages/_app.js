import React from 'react';
import App, { Container } from 'next/app';
import { Header } from '../components/Header/Header';
import { Container as Wrapper } from '../components/Grid/Grid';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps };
  }
  
  data = {
    header: {
      page: {
        name: 'Order Management'
      },
      logo: {
        name: 'The Exchange',
        url: 'https://scontent.fcpt4-1.fna.fbcdn.net/v/t1.0-9/37689786_2132954860316724_5150018318819655680_n.png?_nc_cat=101&_nc_ht=scontent.fcpt4-1.fna&oh=9a83b5b3e1777fea95671cdee614cd79&oe=5D9F965D',
        alt: 'The Exchange Logo'
      },
      account: {
        name: 'The Exchange'
      },
      user: {
        name: 'Felix',
        settings: {
          theme: 'light'
        }
      },
      navigation: [
        {
          id: 1,
          name: 'Home',
          url: '',
          items: [{
            id: 1,
            name: 'Dashboard',
            url: ''
          }]
        },
        {
          id: 2,
          name: 'Orders',
          url: '',
          items: [{
            id: 1,
            name: 'Food',
            url: ''
          }, {
            id: 2,
            name: 'Beverage',
            url: ''
          }, {
            id: 3,
            name: 'Cleaning',
            url: ''
          }, {
            id: 4,
            name: 'Other',
            url: ''
          }]
        },
        {
          id: 3,
          name: 'Inventory Management',
          url: '',
          items: [{
            id: 1,
            name: 'Inventory Items',
            url: ''
          }, {
            id: 2,
            name: 'Suppliers',
            url: ''
          }, {
            id: 3,
            name: 'Menu Development',
            url: ''
          }, {
            id: 4,
            name: 'Other',
            url: ''
          }]
        },
        {
          id: 4,
          name: 'HR',
          url: '',
          items: [{
            id: 1,
            name: 'Employee Manamgent',
            url: '/index'
          }, {
            id: 2,
            name: 'SOPs',
            url: '/test'
          }, {
            id: 3,
            name: 'Training',
            url: ''
          }, {
            id: 4,
            name: 'Disciplinary',
            url: ''
          }, {
            id: 5,
            name: 'Contractsd',
            url: ''
          }]
        }
      ]
    }
  };
  
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <Container>
        { /*language=SCSS*/}
        <style jsx global>
          {`
            html {
              font-family: sans-serif;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }

            *:before, *:after {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }

            body, td, th, input, textarea {
              font-family: 'Lato', Segoe UI, Tahoma, Arial, sans-serif;
              font-size: 11px;
              line-height: 19px;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
              background-color: #ebeced;
            }

            body {
              margin: 0;
            }
          `}
        </style>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
        <Header {...this.data.header} />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    );
  }
}

export default MyApp;