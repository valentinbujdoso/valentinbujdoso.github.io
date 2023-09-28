<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<body>
    <h1 align="center">Beer Recommendations JSP</h1>

<c:forEach items="${styles}" var="style">
    <p>try: ${style}</p>
</c:forEach>

</body>
</html>
