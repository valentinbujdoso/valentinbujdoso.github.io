//import app.Quiz;
import com.example.numquiz.Quiz;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class TestQuiz {
    Quiz quizUnderTest = new Quiz();

    public TestQuiz() {

    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}

    @Test
    public void testIsCorrect() {
        /* should be at first question, answer should be "9" */
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
        quizUnderTest.scoreAnswer();
        /* should be at second question, answer should be "8" */
        assertTrue("second question answer should be '8'", quizUnderTest.isCorrect("8"));
        quizUnderTest.scoreAnswer();
        /* should be at third question, answer should be "36" */
        assertTrue("third question answer should be '36'", quizUnderTest.isCorrect("36"));
        quizUnderTest.scoreAnswer();
        /* should be at fourth question, answer should be "13" */
        assertTrue("fourth question answer should be '13'", quizUnderTest.isCorrect("13"));
        quizUnderTest.scoreAnswer();
        /* should be at fifth question, answer should be "32" */
        assertTrue("fifth question answer should be '32'", quizUnderTest.isCorrect("32"));
    }

    @Test
    public void testGetNumberQuestions() {
        /* should be at first question, answer should be 5 */
        assertEquals(5, quizUnderTest.getNumQuestions());
    }

    @Test
    public void testGetNumberCorrect() {
        /* should be at first question, answer should be 0 */
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer(); //should increment the score and the current question number
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());

    }
}
