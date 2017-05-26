using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Chrome;

namespace JJAssignment4.test
{
    [TestFixture]
    public class UnitTest1
    {
        private IWebDriver driver;
               

        [SetUp]
        public void SetupTest()
        {
            driver = new ChromeDriver();                     
        }

        [TearDown]
        public void TeardownTest()
        {
            if (driver != null)
            {
                driver.Quit();
            }
        }


        [Test]
        public void NewCarAdded_CorrectInput_ExpectedTitleDisplayed()
        {
            driver.Navigate().GoToUrl("http://localhost:63342/JJAssignment4/index.html#newCar");
                        
            driver.FindElement(By.Id("fullName")).SendKeys("Janki");

            driver.FindElement(By.Id("address")).Clear();
            driver.FindElement(By.Id("address")).SendKeys("123 Sydney St.");

            driver.FindElement(By.Id("city")).Clear();
            driver.FindElement(By.Id("city")).SendKeys("Kitchener");

            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("abc@gmail.com");

            driver.FindElement(By.Id("phNumber")).Clear();
            driver.FindElement(By.Id("phNumber")).SendKeys("226-536-9586");

            driver.FindElement(By.Id("make")).Clear();
            driver.FindElement(By.Id("make")).SendKeys("BMW");

            driver.FindElement(By.Id("model")).Clear();
            driver.FindElement(By.Id("model")).SendKeys("3 Series");

            driver.FindElement(By.Id("year")).Clear();
            driver.FindElement(By.Id("year")).SendKeys("2016");

            driver.FindElement(By.Id("btnSave")).Click();

            //This waits for 10 seconds for the following check to occur.
            //If it does, the assert is true
            //If it does not happen, the test fails
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.XPath("//section[@id='displayResult']/h2")).Text == "Car Info");
            
        }

        [Test]
        public void TestValidations_EmptyInputs_ErrorDisplayed()
       {
        driver.Navigate().GoToUrl("http://localhost:63342/JJAssignment4/index.html#newCar");
                    
        driver.FindElement(By.Id("fullName")).SendKeys("");

        driver.FindElement(By.Id("address")).Clear();
        driver.FindElement(By.Id("address")).SendKeys("");

        driver.FindElement(By.Id("city")).Clear();
        driver.FindElement(By.Id("city")).SendKeys("");

        driver.FindElement(By.Id("email")).Clear();
        driver.FindElement(By.Id("email")).SendKeys("");

        driver.FindElement(By.Id("phNumber")).Clear();
        driver.FindElement(By.Id("phNumber")).SendKeys("");

        driver.FindElement(By.Id("make")).Clear();
        driver.FindElement(By.Id("make")).SendKeys("");

        driver.FindElement(By.Id("model")).Clear();
        driver.FindElement(By.Id("model")).SendKeys("");

        driver.FindElement(By.Id("year")).Clear();
        driver.FindElement(By.Id("year")).SendKeys("");

        driver.FindElement(By.Id("btnSave")).Click();

        //This waits for 10 seconds for the following check to occur.
        //If it does, the assert is true
        //If it does not happen, the test fails
        WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.ClassName("error")).Enabled);
                    
        }

        [Test]
        public void TestEmailValidation_IncorrectEmailInput_EmailErrorDisplayed()
        {
            driver.Navigate().GoToUrl("http://localhost:63342/JJAssignment4/index.html#newCar");

            //driver.FindElement(By.Id("fullName")).Clear();
            driver.FindElement(By.Id("fullName")).SendKeys("Anki");

            driver.FindElement(By.Id("address")).Clear();
            driver.FindElement(By.Id("address")).SendKeys("abc sterret");

            driver.FindElement(By.Id("city")).Clear();
            driver.FindElement(By.Id("city")).SendKeys("Kitchener");

            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("abc@gmail.bdhfjfcjc");

            driver.FindElement(By.Id("phNumber")).Clear();
            driver.FindElement(By.Id("phNumber")).SendKeys("226-353-69586");

            driver.FindElement(By.Id("make")).Clear();
            driver.FindElement(By.Id("make")).SendKeys("BMW");

            driver.FindElement(By.Id("model")).Clear();
            driver.FindElement(By.Id("model")).SendKeys("3 Series");

            driver.FindElement(By.Id("year")).Clear();
            driver.FindElement(By.Id("year")).SendKeys("2016");

            driver.FindElement(By.Id("btnSave")).Click();

            //This waits for 10 seconds for the following check to occur.
            //If it does, the assert is true
            //If it does not happen, the test fails
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.Id("email-error")).Text == "Please enter a valid email");
                        
        }

        [Test]
        public void TestPhoneValidation_IncorrectPhoneInput_PhoneErrorDisplayed()
        {
            driver.Navigate().GoToUrl("http://localhost:63342/JJAssignment4/index.html#newCar");

            //driver.FindElement(By.Id("fullName")).Clear();
            driver.FindElement(By.Id("fullName")).SendKeys("Ki");

            driver.FindElement(By.Id("address")).Clear();
            driver.FindElement(By.Id("address")).SendKeys("123 Sydney St.");

            driver.FindElement(By.Id("city")).Clear();
            driver.FindElement(By.Id("city")).SendKeys("Kitchener");

            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("abc@gmail.com");

            driver.FindElement(By.Id("phNumber")).Clear();
            driver.FindElement(By.Id("phNumber")).SendKeys("226586");

            driver.FindElement(By.Id("make")).Clear();
            driver.FindElement(By.Id("make")).SendKeys("BMW");

            driver.FindElement(By.Id("model")).Clear();
            driver.FindElement(By.Id("model")).SendKeys("3 Series");

            driver.FindElement(By.Id("year")).Clear();
            driver.FindElement(By.Id("year")).SendKeys("2016");

            driver.FindElement(By.Id("btnSave")).Click();

            //This waits for 10 seconds for the following check to occur.
            //If it does, the assert is true
            //If it does not happen, the test fails
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.Id("phNumber-error")).Text == "Enter valid phone number");
        }

        [Test]
        public void SearchCar_EmptyDatabase_ExpectedTitleDisplayed()
        {
            driver.Navigate().GoToUrl("http://localhost:63342/JJAssignment4/index.html#searchCar");
            
            //This waits for 10 seconds for the following check to occur.
            //If it does, the assert is true
            //If it does not happen, the test fails
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.XPath("//*[@id='listView']/h2")).Text == "No records yet to display.");
        }               
    }
}

