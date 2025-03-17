---
layout: post
title: 'How to setup theme in jekyll'
date: 2025-02-12
categories: [Tutorial, Jekyll]
comments: true
---
#### First
jika belum install jekyll

install jekyll (lewati jika sudah instal)

```gem install jekyll```


buat app jekyll (lewat jika sudah buat)

```jekyll new nama_app```

#### Setup Theme

tambahkan di file gemfile (disini saya mau memakai tema [Niri](https://github.com/rokhimin/jekyll-niri), tema jekyll buatan saya :promosi hehe )

```gem "niri", "~> 1.4"```

kemudian 

```bundle```

tambahkan di file _config.yml

```theme: niri```

#### finish

jalankan jekyll

```bundle exec jekyll s```

buka browser dan ketik di address bar 

```http://localhost:4000``` 

#### misc

tambahan : untuk menggunakan tema jekyll di github page agak berbeda, harus menggunakan remote repo dari github.

tambahkan di file _config.yml

```remote_theme: rokhimin/jekyll-niri```

#### another theme jekyll

kalian bisa mencari tema lainya di 

- [jekyllthemes.org](http://jekyllthemes.org/)
- [jekylltheme.io](https://jekyllthemes.io/)
- [jamstackthemes](https://jamstackthemes.dev/ssg/jekyll/)
- Github kata kunci search 'jekyll theme'
- dll

![](https://s3.gifyu.com/images/bSMG2.png)

