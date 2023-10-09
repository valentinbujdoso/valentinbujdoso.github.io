$(document).ready(function () {
    $("#display").click(function () {
        let id = $("#id").val();
        $.get("https://jsonplaceholder.typicode.com/users", {"id": id}).done(showInfo);
        $.get("https://jsonplaceholder.typicode.com/posts", {"userId": id}).done(showList);
    });
});

function showInfo(data) {
    let uData = data[0];
    let info = `<p> Name: ${uData.name} </p>
    <p>Email: ${uData.email} </p>
    <p> Address: ${uData.address.zipcode}, ${uData.address.city}, ${uData.address.street}, ${uData.address.suite}`;

    $("#info").html(info);
}

function showList(data) {
    let list = "";
    for (const element of data) {
        list += `Title: ${element.title} <br/>
          Body: ${element.body}<br/>`;
    }

    $("#data").html(list);
}