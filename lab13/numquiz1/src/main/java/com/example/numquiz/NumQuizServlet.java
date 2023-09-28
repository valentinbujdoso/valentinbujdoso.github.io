package com.example.numquiz;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;

import static java.lang.Integer.parseInt;

public class NumQuizServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        HttpSession session = request.getSession();
        Quiz quiz = new Quiz();
        session.setAttribute("Quiz",quiz);

        request.getRequestDispatcher("quiz.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        HttpSession session = request.getSession(true);
        Quiz quiz;

        if (request.getParameter("btnRestart") != null) {
            session.setAttribute("Quiz", new Quiz());
        }

        if (session.getAttribute("Quiz") == null) {
            quiz = new Quiz();
            session.setAttribute("Quiz",quiz);
        } else {
            quiz = (Quiz) session.getAttribute("Quiz");
        }

        int age = parseInt(request.getParameter("age"));
        if (age >= 4 && age <= 100){
            session.setAttribute("age", age);
            session.setAttribute("correct_age",true);

            String answer = request.getParameter("txtAnswer");

            if (answer != null && answer != "") {
                boolean correct = quiz.isCorrect(answer);
                if(correct)
                    quiz.scoreAnswer();

                session.setAttribute("correct",correct);
            }

            if (quiz.getNumCorrect() > 4) {
                System.out.println(quiz.getFinalGrade());
                response.sendRedirect("end.jsp");
            } else {
                request.getRequestDispatcher("quiz.jsp").forward(request, response);
            }

        } else {
            session.setAttribute("correct_age",false);
            request.getRequestDispatcher("quiz.jsp").forward(request, response);
        }
    }
}