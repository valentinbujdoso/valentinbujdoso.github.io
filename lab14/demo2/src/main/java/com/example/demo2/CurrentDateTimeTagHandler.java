package com.example.demo2;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTimeTagHandler extends SimpleTagSupport {
    String color;
    String size;

    public void doTag() throws JspException, IOException //render custom tag
    {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");

        JspWriter out = getJspContext().getOut();
        out.write(String.format("<span style='color:%s;font-size:%s;'>%s</span>", color, size, ft.format(dNow)));
    }

    //Need a setter for each attribute of custom tag
    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
