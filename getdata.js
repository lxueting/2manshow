function get_allaccounts(){
    $.getJSON(
      //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
      "http://localhost:5000/acccountinfo",
      function(data) {
          var text ="<ul>"; //get the data from get function of sellers, postman 
          data.forEach(function(item) {    
          text = text + `<li>
          user_id: ${item.user_id} <br>
          username:${item.username}<br>
          </li>`;
          
          });
          text += "</ul>";
          $(".mypanel").html(text);
      });
    };



function get_following(){
    var textraw = $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/following?userid=1");
    
    // var text = JSON.parse(textraw);
    console.log(textraw);
        // function(data) {
        //     var text ="<ul>"; //get the data from get function of sellers, postman 
        //     data.forEach(function(item) {    
        //     text = text + `<li>
            
        //     username:${item.username}<br>
        //       </li>`;
              
        //     });
        //     text += "</ul>";
        //     $(".mypanel").html(text);
        // });
    };

    function get_followers(){
        $.getJSON(
            //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
            "http://localhost:5000/followers?userid=1",
            function(data) {
                var text ="<ul>"; //get the data from get function of sellers, postman 
                data.forEach(function(item) {    
                text = text + `<li>
                username:${item.username}<br>
                  </li>`;
                  
                });
                text += "</ul>";
                $(".mypanel").html(text);
            });
        };

// function count_following (){
//     document.getElementById('followingcount').innerHTML = "Following: 2"
//     $.getJSON(
//         //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
//         "http://localhost:5000/countfollowing?userid=1",
//         function(data) {
//             var text ="<ul>"; //get the data from get function of sellers, postman 
//             data.forEach(function(item) {    
//             text = text + `<li>
//             following:${item.following}<br>
//               </li>`;
              
//             });
//             text += "</ul>";
//             $(".countfollowing").html(text);
//         });
//     };

document.getElementById("followingcount").onload = function count_following (){
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/countfollowing?user_id=1",
        function(data) {
            var text =""; //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text = text + `
            Following<br>
            ${item.following}
            `;
              
            });

            document.getElementById('followingcount').innerHTML = text
        });
    };


    function count_followers(){
        $.getJSON(
            //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
            "http://localhost:5000/countfollowers?userid=1",
            function(data) {
                var text =""; //get the data from get function of sellers, postman 
                data.forEach(function(item) {    
                text = text + `
                Followers <br>
                ${item.followers}
                `;
                });
                //$(".countfollowing").html(text);
                document.getElementById('followerscount').innerHTML = '!!!!'
            });
        };

function counts(){
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/countfollowing?user_id=1",
        function(data) {
            var text =""; //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text = text + `
            ${item.following} <br>
            Following
            `;
              
            });

            document.getElementById('followingcount').innerHTML = text
        });
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/countfollowers?userid=1",
        function(data) {
            var text =""; //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text = text + `
            ${item.followers} <br>
            Followers
            `;
            });
            //$(".countfollowing").html(text);
            document.getElementById('followerscount').innerHTML = text
        });
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/portfoliovalue?user_id=1",
        function(data) {
            var text ="<ul>"; 
            var text1 = "<ul>"; //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text = text +  + ` 
            ${(item.currentvalue)} ` + ' SGD'
            text1 += `
            ${(item.profit).toFixed(2)}% `;
            text1 += "</ul>"
            });

            document.getElementById('totalvalue').innerHTML = text;
            document.getElementById('performance').innerHTML = text1;

    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/profile?user_id=1",
        function(data) {
            var text ="";
            var text1 ="" //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text = text + `
            ${item.username}
            `;
            text1 += `${item.firstname}`;
            });
            //$(".countfollowing").html(text);
            document.getElementById('username').innerHTML = text;
            document.getElementById('firstname').innerHTML = text1;
            
        });
    
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/portfoliodetails?user_id=1",
        function(data) {
            var text ="";
             //get the data from get function of sellers, postman 
            data.forEach(function(item) {    
            text += '<li>' + `${item.ticker} ` + 
            `${item.totalquantity} ` + `
            ${item.averageprice} ` + `
            ${item.currentprice} ` + `
            ${item.profit}` + `
            ${(item.profitpercentage).toFixed(2)}%` 
            '</li>'
            });
            //$(".countfollowing").html(text);
            document.getElementById('breakdown').innerHTML += text; 
            

            
        });
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/recenttransactions?user_id=1",
        function(data) {
            var text ="";
            data.forEach(function(item) {    
            text += '<li>' + `${item.time} ` + 
            `${item.type} ` + `
            ${item.ticker} ` + `
            ${item.quantity} ` + `
            ${item.price}` +
            '</li>'
            });

            document.getElementById('recenttransactions').innerHTML = text;

            
        });
    

})};

function portfoliovalue(){
    $.getJSON(
        //'https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', 
        "http://localhost:5000/portfoliovalue?user_id=1",
        function(data) {
            var tr;  
            data.forEach(function(item) {   
                    tr = $('<tr/>');
                    tr.append("<td>" + data[i].initialvalue + "</td>");
                    tr.append("<td>" + data[i].currentvalue + "</td>");
                    tr.append("<td>" + data[i].profit + "</td>");});

            document.getElementById('portfoliovalue').innerHTML = tr
        });
    };
