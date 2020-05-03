# Photon - 11ty

Photon is a fast and straightforward way to publish your photos with [11ty](https://www.11ty.dev). The process is easy while the website is blazing fast and comes without any tracking or other junk. All you need is a bit of [Git](https://git-scm.com) knowledge and a place to host your 100% static website.

### Overview

- [Example](https://github.com/usephoton/photon-11ty#example)
- [Quick deploy](https://github.com/usephoton/photon-11ty#quick-deploy)
- [Features](https://github.com/usephoton/photon-11ty#features)
- [How to install Photon?](https://github.com/usephoton/photon-11ty#how-to-install-photon)
- [How to use Photon?](https://github.com/usephoton/photon-11ty#how-to-use-photon)
- [Customize](https://github.com/usephoton/photon-11ty#customize)
- [Roadmap](https://github.com/usephoton/photon-11ty#roadmap)
- [Credits](https://github.com/usephoton/photon-11ty#credits)

## Example

A live example, running the master branch of this repository, is available on [photon-11ty.netlify.com](https://photon-11ty.netlify.com).

## Quick deploy

You can get started very quickly by deploying `Photon - 11ty` to Netlify. Press the `Deploy to Netlify` button and you are up and running.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/usephoton/photon-11ty"><img src="https://www.netlify.com/img/deploy/button.svg" alt=""></a>

## Features

- Pre-optimized image resolutions based on the need of your visitor.
- Improved lazy loading of your images
- Every photo has its own URL
- Basic open graph support
- Support for light and dark themes (based on the settings of your visitor)
- Keyboard shortcuts
- RSS feed
- Option for adding other social media references
- Support for Netlify deploy button

## How to install Photon?

1. Fork this repository
2. Clear everything inside `/uploads` & `/posts`
3. Add a high-resolution version of your photos inside the `/uploads` directory. Keep in mind, you don't do any image optimization beforehand. Photon will resize and optimize the images during its build process.
4. Deploy the version you've forked to Netlify or any other hosting provider
5. Be happy!

## How to use Photon?

Photon has two simple rules:

1. You need to put all images inside the `/uploads` directory.
2. To show these images on your website, you need to create a markdown file inside the `/posts` directory. This markdown file handles everything from referencing the image you want to show to handling additional metadata for this specific post.

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

- `layout`: Don't change this! This is the template your photo will be render in.
- `date`: This is the published date of this post. You can set it to everything you want, but please stick to the formatting (YEAR-MONTH-DAY)
- `caption`: A simple caption for your image
- `imageSource`: Reference the file name of the photo you want to reference. Photo looks inside `/uploads` to find it.
- `imageAlt`: Add a simple alternative text describing the image. This can help people who depend on assistive technologies like screen reader.

## Customize

- `language`: Add the HTML language code to tell the primary language you are using on your site to the browser. Default `en`
- `title`: Give your site a proper title
- `url`: Enter the URL your site is going to live on
- `slogan`: Give your site a quick summary. This will be available on your homepage.
- `favicon`: Customise your favicon with an emoji
- `author.name`: Add your name here
- `author.email`: Add your email address here, so people can contact you if you want
- `seo.title`: Add a SEO title here. Used on the homepage.
- `seo.description`: Add a SEO description here. Used on the homepage.
- `social.twitter`: If you want to link to your twitter account, add it here. A reference will be displayed in the homepage.
- `social.instagram`: If you want to link to your Instagram account, add it here. A reference will be displayed in the homepage.

## Roadmap

- iOS Shortcut for optimized uploading from your iPhone
- Webmentions (Not decided yet)
- Web sharing API integration (Not decided yet)
- PWA/Service worker support (Not decided yet)
- Offline support (Not decided yet)
- If you have an idea, please [add it to the open issues](https://github.com/usephoton/photon-11ty/issues/new)

## Credits

This project is based on the fantastic [11ty](https://www.11ty.dev). It was a little inspired by the awesome [Photo Stream](https://github.com/maxvoltar/photo-stream) project made by [Tim Van Damme](https://twitter.com/maxvoltar). The pictures displayed on the demo version are all coming from [Unsplash](https://unsplash.com/).

## License

[MIT](https://github.com/usephoton/photon-11ty/blob/master/LICENSE)
