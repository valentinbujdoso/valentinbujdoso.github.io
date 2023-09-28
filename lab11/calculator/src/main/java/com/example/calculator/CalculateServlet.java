package com.example.calculator;

import java.io.*;

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "calculateServlet", value = "/calcualte-servlet")
public class CalculateServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter pw = response.getWriter();
        Integer first = null;
        Integer second = null;
        Integer third = null;
        Integer fourth = null;
        Integer firstResult = null;
        Integer secondResult = null;

        if(!request.getParameter("1").isEmpty())
            first = Integer.parseInt(request.getParameter("1"));

        if(!request.getParameter("2").isEmpty())
            second = Integer.parseInt(request.getParameter("2"));

        if(!request.getParameter("1").isEmpty() && !request.getParameter("2").isEmpty())
            firstResult = first + second;

        if(!request.getParameter("3").isEmpty())
            third = Integer.parseInt(request.getParameter("3"));

        if(!request.getParameter("4").isEmpty())
            fourth = Integer.parseInt(request.getParameter("4"));

        if(!request.getParameter("3").isEmpty() && !request.getParameter("4").isEmpty())
            secondResult = third * fourth;

        pw.println("<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "  <title>Calculator</title>\n" +
                "</head>\n" +
                "<body>" +
                "<form method=\"post\" action=\"calculate\">" +
                "<input name=\"1\" type=\"number\" value="+ first +"> + <input name=\"2\" type=\"number\" value = " + second + "> = <input name=\"res1\" type=\"number\" disabled value=" + firstResult + "> <br>" +
                "<input name=\"3\" type=\"number\" value="+ third +"> * <input name=\"4\" type=\"number\" value = " + fourth + "> = <input name=\"res2\" type=\"number\" disabled value=" + secondResult + "> <br>" +
                "<button>Submit</button>\n" +
                "</form>\n" +
                "</body>\n" +
                "</html>");
    }
}