$(document).ready(function () {
    $("#display").click(function () {
        let id = $("#id").val();
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users?id=" + id,
            success: showInfo,
        });
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts?userId=" + id,
            success: showList,
        });
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