/* Zadacha za doma
 1. Iskoristete go kodot vo client.js skriptata za da gi prevzemete podatocite koi vi se potrebni za rabota, i:
 * presmetajte kolku objavi ima sekoj korisnik poedinechno i zapishete go rezultatot sortiran vo opagjachki redosled vo datoteka statistika.txt vo format: "
 Korisnik: idKorisnik1 | Broj na objavi: brojNaObjavi1
 Korisnik: idKorisnik2 | Broj na objavi: brojNaObjavi2
 Korisnik: idKorisnik3 | Broj na objavi: brojNaObjavi3
 ...
 ...
 ...
 Korisnik: idKorisnikN | Broj na objavi: brojNaObjaviN
 "
 * pronajdete go korisnikot koj ima najmnogu objavi i zapishete go rezultatot vo datoteka najmnogu.txt vo format: "Korisnik so najmnogu objavi: idKorisnik"
 * pronajdete go korisnikot koj ima najmalku objavi i zapishete go rezultatot vo datoteka najmalku.txt vo format: "Korisnik so najmalku objavi: idKorisnik"
 * pronajdete go korisnikot koj ima najdolga objava i zapishete go rezultatot vo datoteka najdolga.txt vo format: "Korisnik so najdolga objava: idKorisnik | Sodzhina na objavata: sodzhinaNaObjavata"
 * pronajdete go korisnikot koj ima najkratka objava i zapishete go rezultatot vo datoteka najkratka.txt vo format: "Korisnik so najkratka objava: idKorisnik | Sodzhina na objavata: sodzhinaNaObjavata"
 * presmetajte go vkupniot broj na objavi i zapishete go rezultatot vo datoteka vkupno.txt vo format: "Vkupen broj na objavi: brojNaObjavi"
 * ispechatete ja vo konzola sodrzhinata na datotekata statistika.txt
 ZABELESHKA:
  Site operacii za chitanje/zapishuvanje/presmetuvanje treba da se izvrshuvaat asinhrono.
*/


(async () => {
  try {
      let blogRes = await fetch('https://jsonplaceholder.typicode.com/posts');
      let blogData = await blogRes.json();


    const fs = require('fs');

    let userNiza = [];
    const userPostNum = (posts) => {
      posts.forEach((post) => {
        userNiza.push(post.userId);
      });
    };
    userPostNum(blogData);
    console.log(userNiza);

    const nizaOfUsers = []; // Niza od site Useri
    const noOfUserPosts = []; // Niza od Broj na Postovi od useri
    let postCounter = 0;
    for (let i = 0; i < userNiza.length; i++) {
      if (nizaOfUsers[i] !== userNiza[i] && userNiza[i] !== userNiza[i + 1]) {
          nizaOfUsers.push(userNiza[i]);
      }
      if (nizaOfUsers[i] === nizaOfUsers[i + 1]) {
          postCounter++;
      }
      if (userNiza[i] !== userNiza[i + 1]) {
        noOfUserPosts.push(postCounter);
          postCounter = 0;
      }
    };
    console.log(nizaOfUsers);

    let numberPosts = [];  
    for (let i = 0; i < nizaOfUsers.length; i++) {
        numberPosts[i] = {
          korisnik: nizaOfUsers[i],
          postovi: noOfUserPosts[i],
        };
    };

    let postsUser = [];
    for(let i = 0; i < numberPosts.length; i++) {
      postsUser.push ("Korisnik: " + nizaOfUsers[i] + " | Broj na objavi " + noOfUserPosts[i]);
    };
    console.log(numberPosts);
    console.log(postsUser);

    // zapishuvanje na postovi od user vo statistika.txt
    fs.writeFile('statistika.txt', 'postsUser', (err) => {
      console.log("Users and Post po User zapishan vo statistika.txt")  
      if (err) throw err;
    });

    allPosts = [];
    const postLength = (posts) => {
      for (let i = 0; i < posts.length; i++) {
        maxLengthPerUser = posts[i].body.length;
        allPosts[i] = {
        Korisnik: posts[i].userId,
        dolzina: posts[i].body.length,
        sodrzina: posts[i].body,
        };
      };
    };

    postLength(blogData);
    console.log(allPosts.length);

    let allPostNum = "Vkupen broj na objavi: " + allPosts.length;
    console.log(allPostNum);

    // zapishuvanje na vkupno postovi vo vkupno.txt

    fs.writeFile('vkupno.txt', (allPostNum), (err) => {
      console.log("Vkupno postovi zapishani vo vkupno.txt")  
      if (err) throw err;
    });

    let longestPost = allPosts.reduce((previous, current) => {
      return current.dolzina > previous.dolzina ? current : previous;
    });
    console.log(longestPost);
    let finalLongestPost = "Korisnik so najdolga objava: " + longestPost.Korisnik + " | Sodzhina na objavata: " + longestPost.sodrzina ;
    console.log(finalLongestPost);

          // zapishuvanje na najdolgiot post vo najdolga.txt

    fs.writeFile('najdolga.txt', (finalLongestPost), (err) => {
      console.log("User with longest post written in najdolga.txt")  
      if (err) throw err;
    });

    let shortestPost = allPosts.reduce((previous, current) => {
      return current.dolzina < previous.dolzina ? current : previous;
    });
    console.log(shortestPost);
    let finalShortestPost = "Korisnik so najkratka objava: " + shortestPost.Korisnik + " | Sodzhina na objavata: " + shortestPost.sodrzina ;
    console.log(finalShortestPost);

  } catch (err) {
      console.log(err);
  }


})();