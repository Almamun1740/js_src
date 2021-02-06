/*https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js*/
/*or let prom = new Promise*/
      /* function prom(complete) {
         return new Promise(function (resolve, reject) {
           console.log("Fetching data, please wait.");
           setTimeout(() => {
             if (complete) {
               resolve("I'm successfull to run this code.");
             } else {
               reject("I'm failed to run this code.");
             }
           }, 3000);
         });
       }*/
      /*true or false cmd if run on 1st condition type 'true' otherwise false*/ /*method chaining*/
      /*console.log(
           prom(true)
         );
           prom(true).then(onfulfilment);
           prom(true).catch(onRejection);
           prom(true)*/

      /*let onfulfilment = (result) => {
         console.log(result);
       };

       let onRejection = (error) => {
         console.log(error);
       };*/ //     .then((result) => {
      //       console.log(result);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      /*or*/
      //   prom(true).then(onfulfilment).catch(onRejection);

      /*division calculator*/
      /*function prom(a, b) {
         return new Promise(function (resolve, reject) {
           console.log("Fetching data, please wait.");
           var c = a / b;
           setTimeout(() => {
             if ((a, b)) {
               resolve(`Your answer : ${c}`);
             } else {
               reject("Failed to calculate");
             }
           }, 2000);
         });
       }

       prom(5, 2)
         .then((result) => {
           console.log(result);
         })
         .catch((error) => {
           console.log(error);
         });*/

      //ajax code here
      function prom() {
        return new Promise(function (resolve, reject) {
          console.log("Fetching data, please wait.");
          setTimeout(() => {
            $.get(
              "https://jsonplaceholder.typicode.com/posts",
              function (data) {
                resolve(data);
              }
            ).fail((err) => {
              reject("Fail to load JSON.");
            });
          }, 2000);
        });
      }

      prom()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
