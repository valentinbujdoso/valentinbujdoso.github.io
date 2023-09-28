package com.example.beer;

import java.io.*;
import java.util.Iterator;
import java.util.List;

import com.example.model.BeerExpert;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "beerServlet", value = "/beer-servlet")
public class BeerServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        PrintWriter out = response.getWriter();
        out.println("Beer Selection Advice<br>");

        Iterator it = result.iterator();
        while(it.hasNext()) {
            out.print("<br>try: " + it.next());
        }
    }
}