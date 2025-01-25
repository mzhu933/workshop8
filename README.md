# workshop8
Application Programming Interfaces (APIs)
# URL: https://mzhu933.github.io/workshop8/

## workshop 8 note:
<img width="568" alt="截屏2025-01-25 下午9 20 08" src="https://github.com/user-attachments/assets/cb9388c6-e095-47c1-8df0-a936cf61cd18" />

<img width="355" alt="截屏2025-01-25 下午9 20 53" src="https://github.com/user-attachments/assets/64c347a0-b327-456b-bd83-cc78963716a5" />

## - planning: 
- develop temperature data in workshop video
- relate data to images
- current temperature, apparent Temperature, day and night
- I want apparent Temperature data relate to different images
- <0, 1-20, >20 (3 parts of images, cold/good/hot)

## - process:
- https://open-meteo.com/
- select Temperature (2 m), Apparent Temperature, Is Day or Night
URL of weather: https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&current=temperature_2m,apparent_temperature,is_day&hourly=temperature_2m&forecast_days=1

<img width="304" alt="截屏2025-01-25 下午9 41 51" src="https://github.com/user-attachments/assets/6783863d-3e5f-446d-8071-c742c921ff7e" />

3 images for Apparent Temperature, less than 0 degree, between 2 to 20 degree, above 20 degree

- plan to add gif, relate to day and night data

![night](https://github.com/user-attachments/assets/9c8a9aca-2227-4673-b8cc-2595230e5b58)
![day](https://github.com/user-attachments/assets/b7195d93-1c8c-4948-8367-33b1ba3a4170)

- Change background color based on day or night


## - Learning from chatgpt

<img width="385" alt="截屏2025-01-25 下午9 49 03" src="https://github.com/user-attachments/assets/dad26abb-13f7-4930-9442-a2a85ad3c3f8" />

## - adjust typography

<img width="279" alt="截屏2025-01-25 下午9 51 17" src="https://github.com/user-attachments/assets/8b6bec18-e47d-4114-bfe8-0be6908d4fc1" />

<img width="295" alt="截屏2025-01-25 下午9 51 28" src="https://github.com/user-attachments/assets/7450f9be-8885-45de-9fa9-40bbf98ef1b9" />

## - Further development: 
For further development, I could expand the weather code by adding features like a dynamic forecast for the next few days using the API’s hourly or daily data. It’d be cool to add interactive buttons that let users switch between Celsius and Fahrenheit too, making it more engaging. I think I could also make the visuals more interesting by adding animations, like a sun rising or clouds moving depending on the weather. Real-time updates could be implemented by refreshing the data regularly. Lastly, using the browser’s geolocation API to personalize the app by showing the weather based on the user’s location would definitely make it more practical. It seems like it's tooooo complicated for me right now.




