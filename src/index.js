function fetchData(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        success: function(response){
            let person = response.results[0]
            $('#fullname').html(fullname(person.name))
            $('#email').html(person.email)
            setLocation(person.location)
        }
    });
}

function fullname(result){
    return `${result.title} ${result.first} ${result.last} `
}

function setLocation(location){
    $('#street').html(location.street)
    $('#city').html(location.city)
}
 

/*

{"results":[{"gender":"female","name":{"title":"mrs","first":"nella","last":"heikkila"},"location":{"street":"4330 reijolankatu","city":"karkkila","state":"åland","postcode":63493},"email":"nella.heikkila@example.com","login":{"username":"organicpanda427","password":"aaaaaa","salt":"jUKL55kU","md5":"7bde99d3c1a2a22778ad911fdf700748","sha1":"4ed610243f20490ec7876d7e32c53f1c90fa2ea5","sha256":"38d533b815559964c7324287275597736862e8890acf3e96c324671b3ca0ef7a"},"dob":"1989-10-20 19:39:34","registered":"2008-12-10 17:10:47","phone":"09-087-917","cell":"049-909-47-90","id":{"name":"HETU","value":"1489-220B"},"picture":{"large":"https://randomuser.me/api/portraits/women/79.jpg","medium":"https://randomuser.me/api/portraits/med/women/79.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/79.jpg"},"nat":"FI"}],"info":{"seed":"04bede74ee268bf1","results":1,"page":1,"version":"1.1"}}

*/
