package com.example.numquiz;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private List<Question> questions;
    private int score;
    private int index;
    private int numOfTry;
    private int points;


    public Quiz() {
        questions = new ArrayList<>();
        score = 0;
        index = 0;
        numOfTry = 0;
        points = 0;

        questions.add(new Question("3, 1, 4, 1, 5", "9"));
        questions.add(new Question("1, 1, 2, 3, 5", "8"));
        questions.add(new Question("1, 4, 9, 16, 25", "36"));
        questions.add(new Question("2, 3, 5, 7, 11", "13"));
        questions.add(new Question("1, 2, 4, 8, 16", "32"));
    }

    public int getNumCorrect() {
        return score;
    }

    public String getCurrentQuestion() {
        return questions.get(index).getQuestion();
    }

    public boolean isCorrect(String answer) {
        if (questions.get(index).getAnswer().equals(answer)) {
            return true;
        }
        if(numOfTry >= 2)
            index++;

        numOfTry++;
        return false;
    }

    public void scoreAnswer() {
        index++;
        score++;

        switch (numOfTry) {
            case 0:
                points += 10;
                break;
            case 1:
                points += 5;
                break;
            case 2:
                points += 2;
                break;
        }
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getCurrentQuestionIndex() {
        return index;
    }

    public String getCurrentAnswer() {
        return questions.get(index).getAnswer();
    }

    public String getFinalGrade() {
        if (points > 44)
            return "A";
        else if (points > 34)
            return "B";
        else if (points > 24)
            return "C";
        else
            return "NC";
    }
}
