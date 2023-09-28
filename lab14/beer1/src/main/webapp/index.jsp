<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Beer Selection Page!" %></h1>
<form action="beer">
    Select beer characteristics <p></p>
    Color:
    <select name="color" size="1">
        <option value="light">light</option>
        <option value="amber">amber</option>
        <option value="brown">brown</option>
        <option value="dark">dark</option>
    </select><br><br>
    <button>Submit</button>
</form>
</body>
</html>