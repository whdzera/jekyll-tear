---
layout: post
title: 'Install Ruby on Rails di Linux Ubuntu'
date: 2019-04-18
categories: [Tutorial, Ruby, Rails]
comments: true
---

## ALASAN
mengapa ruby on rails ?  karena framework ruby on rails , MVC dan bahasa ruby sangat elegan dan enak dipandang, mungkin :) . tenang, gampang kok instal ruby dan ruby on rails di Ubuntu 

jadi gak usah banyak kata, langsung aja kita mulai : 

## PERSIAPAN 
-Koneksi Internet Stabil 

-Akses Root 

-Sudah terinstal Curl 

```$ sudo apt-get install curl```


## INSTAL RUBY DENGAN RVM  
rvm adalah ruby version manager . fungsinya untuk memanage versi dari ruby dan rails. 
keuntunganya kita bisa berganti versi dari ruby dan rails dengan mudah dan gak ribet

```$ \curl -L https://get.rvm.io | bash -s stable --ruby```


update rvm dan instal ruby, disini saya menggunakan ruby versi 2.4.0 

```$ rvm get stable --autolibs=enable```  

```$ rvm install ruby```  

```$ rvm --default use ruby-2.4.0``` 


cek ruby sudah terinstal 

```$ ruby -v``` 


cek gem 

```$ gem -v``` 


update gem 

```$ gem update --system``` 


set rvm global gemset dan gem yg ada 

```$ rvm gemset use global``` 

```$ gem list``` 


instal rails dengan ruby gems 

```$ gem install rails``` 
    
cek rails sudah teinstal 

```$ rails -v``` 

selesai . kita sudah menginstal ruby dan ruby on rails :) 
kita sudah bisa buat project atau aplikasi dengan ruby on rails 



## BUAT PROJECT BARU DENGAN RUBY ON RAILS   

buat direktori baru 

```$ mkdir project_rubyonrails``` 


masuk direktori project_rubyonrails 

```$ cd project_rubyonrails``` 


buat project baru ruby on rails 

```$ rails new appku``` 


masuk direktori project appku 

```$ cd appku``` 


test server

```$ rails s``` 


buka browser dan ketik di address bar 

```http://localhost:3000``` 

jika tidak ada masalah . akan seperti gambar dibawah 


![sucess](https://s3.gifyu.com/images/eNjSzlZ8UOw.jpg)




