package com.example.numquiz;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private List<Question> questions;
    private int score;
    private int index;


    public Quiz() {
        questions = new ArrayList<>();
        score = 0;
        index = 0;

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
        if (questions.get(index).getAnswer().equals(answer))
            return true;
        return false;
    }

    public void scoreAnswer() {
        index++;
        score++;
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getCurrentQuestionIndex() {
        return index;
    }
}
