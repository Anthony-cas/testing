from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
#specify the path to your chromedriver executable
PATH = "C:\Program Files (x86)\chromedriver.exe"

#create a Service object using the path to chromeDriver
service = Service(PATH)
#driver = webdriver.Chrome(PATH)

#initialize the Chrome Webdriver using the Service object
driver = webdriver.Chrome(service=service)

driver.get("https://google.com")

print(driver.title)

element = driver.find_element(By.ID,"APjFqb")
element.send_keys("test")
element.send_keys(Keys.RETURN)


time.sleep(15)

#driver.quit()