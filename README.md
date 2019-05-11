# Artists Theme

The Artists Theme is a one page portfolio for freelancers based on the original [Jekyll theme](//github.com/DevTips/Artists-Theme) by [Travis Neilson](//github.com/travisneilson) aka [DevTips](//www.youtube.com/user/DevTipsForDesigners) and his many contributors. It's the result of a longer [video series](//www.youtube.com/watch?v=T6jKLsxbFg4&list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI) made by him that is showing the whole developement process from the first designs to the final Jekyll theme. Consider to subscribe to his [YouTube channel](//www.youtube.com/user/DevTipsForDesigners).

This Hugo theme features several content sections, like an about section  showing the level of your skills, a responsive portfolio with hover effects, a gallery to present your partenaire's opinions and a contact form.

![Hugo Artists Theme screenshot](https://raw.githubusercontent.com/digitalcraftsman/hugo-artists-theme/master/images/screenshot.png)


## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/digitalcraftsman/hugo-artists-theme

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing the Artists Theme successfully it requires a just a few more steps to get your site finally running.


### The config file

Take a look inside the [`exampleSite`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/exampleSite/config.toml). To use it, copy the [`config.toml`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/exampleSite/config.toml) in the root folder of your Hugo site. Feel free to customize this theme as you like.


### Change the hero background

The hero acts as an eye-catcher for your site. So consider to give him a nice background. You just need to replace the [`equipe2017_background.JPG`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/img/equipe2017_background.JPG) at [`static/img`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/static/img) with your own background image. But it's important that you keep the original filename.


### Add your own logo

Go to [`static/img`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/static/img) and replace the [`logo.svg`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/img/logo.svg) with your own file. If you don't want to use an svg you also need to change the source name  inside the [`all.css`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/css/all.css) stylesheet [`here`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/css/all.css#L614) and [`here`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/css/all.css#L662).


### Introduce yourself

In the next step, replace the image of Travis in the about section with one of yours. Therefore search the [`logo_rotaract.png`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/static/img/logo_rotaract.png) under [`static/img`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/static/img). But keep the original filename here too.

Furthermore, you can show your visitors your skills and capabilities. Add as many skills as you like by copying the snippet below:

```toml
[[params.about.skills]]
   name = "Communication"
   value = 9
```

To rate your skill level, use a value between 0 and 10.


### Create your portfolio

Adding a new project is very simple. Firstly, you need to define a new project in your [`data/actions.toml`](https://github.com/digitalcraftsman/hugo-artists-theme/blob/dev/exampleSite/data/actions.toml) with the following code snippet:

```toml
# Section title
title = "actions"

[[projects]]
    name = "Les Rendez-vous du Chocolat"
    folder = "rdv_chocolat"
```

The `folder` attribute defines a project-specific subfolder for your images. You will use it at the end of this section.

Beside the [`data/actions.toml`](https://github.com/digitalcraftsman/hugo-artists-theme/blob/dev/exampleSite/data/actions.toml), there is under `content` another subfolder called [`actions`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/exampleSite/content/actions) which hosts the files that will appear as your projects in the actions section. Copy the whole folder into the `content` directory at the **root** of your Hugo site.

Such a project file might look like [this one](//raw.githubusercontent.com/digitalcraftsman/hugo-artists-theme/master/exampleSite/content/actions/rdv_chocolat.md) written in Markdown:

```markdown
![Les Rendez-vous du Chocolat](img/actions/rdv_chocolat/img1.jpg)

TYPO: International Design Talks is an annual event held in Berlin, London, and San Francisco. This promotional project is developed to market the event for the designindustry. The use of patterns, sophisticated color scheme and typography are applied for the print and mobile application.

![Les Rendez-vous du Chocolat](img/actions/rdv_chocolat/img1.jpg)
![Les Rendez-vous du Chocolat](img/actions/rdv_chocolat/img3.jpg)
![Les Rendez-vous du Chocolat](img/actions/rdv_chocolat/img4.jpg)
![Les Rendez-vous du Chocolat](img/actions/rdv_chocolat/img5.jpg)
```

The paths to your images are relative to the base url. Store those under [`static/img/actions/<folder>/`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/static/img/actions). `<folder>` is a the attribute from the [`data/actions.toml`](https://github.com/digitalcraftsman/hugo-artists-theme/blob/dev/exampleSite/data/actions.toml) that you defined for the images above. Create at least a `thumb.jpg` for the preview in the portfolio grid.


### What your partenaires think

For a new quote, copy the code below into your [`data/partenaires.toml`](//github.com/digitalcraftsman/hugo-artists-theme/blob/dev/exampleSite/data/partenaires.toml):

```toml
# Section title
title = "partenaires"

[[list]]
    avatar = "face-aaroni.jpg"
    name   = "Scott Summers"
    title  = "Director of Design, OnToText Ind."
    quote  = "**While we all felt that Travis was a great** asset to our team — and really worked hard to understand our products from the point of view of the customer — we also all agree he should shower more often."
    logo   = "logo1.png"
```

Store both the partenaire's avatar and logo at [`static/img/partenaires`](//github.com/digitalcraftsman/hugo-artists-theme/tree/master/static/img/partenaires)


### Add social networks

You can link some of your social networks in this theme too. Therefore copy the this snippet:

```toml
[[params.contact.social]]
      icon = "twitter"
      link = "//twitter.com/devtipsshow"
```

The following social network icons are available:

`twitter`, `facebook`, `github`, `pinterest` `google-plus`, `linkedin`
`youtube`, `instagram`, `dribbble`, `behance`, `soundcloud` and `vine`.


### Make the contact form working

Since this page will be static, you can use [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Begin the setup by following the steps below:

1. Enter your email address under 'email' in the [`config.toml`](//github.com/digitalcraftsman/hugo-artists-theme/blob/master/exampleSite/config.toml)
2. Upload the generated site to your server
3. Send a dummy email yourself to confirm your account
4. Click the confirm link in the email from [formspree.io](//formspree.io/)
5. You're done. Happy mailing!


### Nearly finished

In order to see your site in action, run Hugo's built-in local server.

    $ hugo server

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.
