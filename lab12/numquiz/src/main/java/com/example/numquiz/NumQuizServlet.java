package com.example.numquiz;

import java.io.*;

import jakarta.servlet.http.*;

public class NumQuizServlet extends HttpServlet {

    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! </p>");
        out.println("<p>" + currQuest.substring(0, currQuest.length() - 2)
                + "<span style= 'color:red'>" + currQuest.charAt(currQuest.length() - 2) + "</span>" + currQuest.charAt(currQuest.length() - 1) + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        if (error && (answer != null)) {    //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }

        out.print("<p><input type='submit' name='btnNext' value='Next' /> ");
        out.print("<input type='submit' name='btnRestart' value='Restart' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>	</body> ");
        out.print("</html> ");
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        Quiz quiz = new Quiz();
        String currQuestion = quiz.getCurrentQuestion();
        session.setAttribute("Quiz",quiz);
        genQuizPage(quiz, response.getWriter(), currQuestion, false, null);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("Quiz");
        if(request.getParameter("btnRestart") != null){
            session.invalidate();
            doGet(request, response);
        }
        else if(request.getParameter("btnNext") != null){
            if(quiz.getNumCorrect() == quiz.getNumQuestions() - 1){
                genQuizOverPage(out);
            }else{
                String answer = request.getParameter("txtAnswer");
                if(quiz.isCorrect(answer)){
                    quiz.scoreAnswer();
                }
                genQuizPage(quiz, out, quiz.getCurrentQuestion(), !quiz.isCorrect(answer), answer);
            }
        }
    }
}