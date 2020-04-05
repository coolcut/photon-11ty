# Photon - 11ty

"Photon 11ty" is a very fast and straightforward way of publishing your photos with [11ty](https://www.11ty.dev). The process is easy while the website is blazing fast and comes without any tracking or other junk.

- Features
- How to install Photon?
- How to use Photon?
- Customize
- Roadmap

## Features

- Pre-optimized image resolutions based on the need of your visitor.
- Every photo has its own URL
- Support for light and dark themes (based on the settings of your visitor)
- Keyboard shortcuts
- RSS feed
- Option for adding other social media references

## How to install Photon?

1. Fork this repository
2. Clear everything inside `/uploads` & `/posts`
3. Add a high-resolution version of your photos inside the `/uploads` directory (don't do any image optimisation beforehand, everything will be done for you later)
4. Deploy the version you've forked to Netlify
5. Change your Netlify build settings
5.1. Change your `build command` to `yarn build`
5.2. Change your `publish directory` to `_site`
6. Be happy!

## How to use Photon?

Photon has two simple rules. The first is that you need to put all your image files inside the `/uploads` directory. The second rule is that if you also want to show them on your website, you need to create a new markdown file inside the `/posts` directory. This markdown file is your post and handles everything from referencing the image file you want to connect with this post to add additional metadata to this specific post.

A post looks like this:

```
---
layout: layouts/photo.njk
date: 2020-03-01
caption: Test 1
imageSource: andy-feliciotti-YNkjiFhMtck-unsplash.jpg
imageAlt: This is the alt text
---
```

- `layout`: Don't change this, this is the template your photo will be rendered to.
- `date`: This is the published date of this post. You can set it to everything you want, but please stick to the formatting (YEAR-MONTH-DAY)
- `caption`: A simple caption for your image
- `imageSource`: Reference the file name of the photo you want to reference. Photo looks inside `/uploads` to find it.
- `imageAlt`: Add a simple alternative text describing the image for people who might benefit from this because of disabilities.

## Customize

- `language`: Add the HTML language code to tell the primary language you are using on your site to the browser. Default `en`
- `title`: Give your site a proper title
- `url`: Enter the url your site is going to live on
- `slogan`: Give your site a quick summary. This will be available on your homepage.
- `favicon`: Customise your favicon with an emoji
- `author.name`: Add your name here
- `author.email`: Add your email address here, so people can contact you if you want
- `seo.title`: Add a seo title here. This will be used on the homepage.
- `seo.description`: Add a seo description here. This will be used on the homepage.
- `social.twitter`: If you want to link to your twitter account, add it here. A reference will be displayed in the homepage.
- `social.instagram`: If you want to link to your instagram account, add it here. A reference will be displayed in the homepage.

## Roadmap

- Improved lazy loading of your images
- iOS Shortcut for optimised uploading from your iPhone
- Support for Netlify deploy button
- Detailed open graph support
- you have an ideas, please [add it to the open isses](https://github.com/usephoton/photon-11ty/issues/new)
