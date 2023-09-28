<%--
  Created by IntelliJ IDEA.
  User: valentinbujdoso
  Date: 2023. 09. 08.
  Time: 14:43
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>NumberQuiz</title>
</head>
<body>
    <form method='post'>
        <p>Your age: <input type="number" name="age" value="${age}" required/></p>
        <c:if test="${correct_age == false}">
            <p style='color:red'>Age must between 4 and 100</p>
        </c:if>
        <h3>Have fun with NumberQuiz!</h3>
        <p>Your current score is: ${Quiz.numCorrect}<br/></p>
        <p>Guess the next number in the sequence!
            ${Quiz.currentQuestion} <br/></p>
        <p>Your answer:<input type='text' name='txtAnswer' value='' title='${Quiz.currentAnswer}' /></p>

        <c:if test="${correct == false}">
            <p style='color:red'>Your last answer was not correct! Please try again</p>
        </c:if>

        <p>
            <input type='submit' name='btnNext' value='Next'/>
            <input type='submit' name='btnRestart' value='Restart'/>
        </p>
    </form>
</body>
</html>
