import { GoogleGenerativeAI } from "@google/generative-ai";

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggestinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a JSON-formatted travel plan for a 3-day budget trip to Las Vegas for a couple, including hotel options and a detailed itinerary:\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80/night\",\n      \"hotelImageUrl\": \"https://media.gettyimages.com/id/1292770407/photo/circa-las-vegas-hotel-casino-opens-in-downtown.jpg?s=612x612&w=gi&k=20&c=qjM1bY364Z6O8J2sWlQ8g5_0YfH4H1xZgq4l264bE8s=\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1363,\n        \"longitude\": -115.1681\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic Vegas hotel with a circus theme, offering affordable rooms and family-friendly entertainment. Features include a midway, Adventuredome theme park (extra cost), and multiple dining options.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$50 - $90/night\",\n      \"hotelImageUrl\": \"https://media.gettyimages.com/id/1457770992/photo/exterior-of-excalibur-hotel-and-casino-in-las-vegas.jpg?s=612x612&w=gi&k=20&c=6414-v0Z3hE91k02nS_B3jP6F8mG-j7l1-nQkQ3gQhA=\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0986,\n        \"longitude\": -115.1733\n      },\n       \"rating\": 4.0,\n       \"description\": \"A medieval-themed hotel, offering budget-friendly rooms and entertainment.  Includes multiple dining options, a pool complex, and a variety of shows.\"\n    },\n    {\n      \"hotelName\": \"The LINQ Hotel + Experience\",\n       \"hotelAddress\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n       \"price\": \"$60 - $120/night\",\n       \"hotelImageUrl\":\"https://media.gettyimages.com/id/1412730384/photo/the-linq-hotel-casino-on-the-las-vegas-strip-with-the-high-roller-ferris-wheel.jpg?s=612x612&w=gi&k=20&c=n7E8Y-t4_j9rT2_gV-yKjU15-rQ7b9Yl-m-Z5-sZ9kY=\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1168,\n         \"longitude\": -115.1706\n      },\n      \"rating\": 4.2,\n       \"description\": \"Modern hotel with a vibrant atmosphere and close proximity to the LINQ Promenade. Features a variety of dining options, a pool, and access to the High Roller observation wheel.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip\",\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A stunning indoor garden with changing displays throughout the year. It's free to enter and a great spot for photos.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1488253749/photo/the-bellagio-conservatory-and-botanical-garden.jpg?s=612x612&w=gi&k=20&c=rN3nK2005i-f_b8L1E8l16mNn13bU0J-8y_Zf8P4D2c=\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1128,\n            \"longitude\": -115.1741\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n          \"travelTime\": \"10-15 mins from hotels\"\n        },\n         {\n          \"placeName\": \"Bellagio Fountains\",\n           \"placeDetails\": \"Watch the spectacular fountain show in front of the Bellagio, with water choreographed to music.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1493566953/photo/the-fountains-of-bellagio-in-las-vegas.jpg?s=612x612&w=gi&k=20&c=5I4qN_9t8TjJ76J5zIe6a7_E4ZlE668I6V1B7gE7d2g=\",\n          \"geoCoordinates\": {\n           \"latitude\": 36.1127,\n            \"longitude\": -115.1743\n          },\n           \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n         \"travelTime\": \"2 mins from Garden\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n           \"placeDetails\": \"Take a ride on the High Roller for panoramic views of Las Vegas, particularly beautiful at sunset.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1184358403/photo/high-roller-observation-wheel-in-las-vegas-at-night.jpg?s=612x612&w=gi&k=20&c=EefK_8l0wB5Jt85L-8F-V5-w-2z6BfN6wz0Qk0_rX_I=\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1174,\n             \"longitude\": -115.1699\n           },\n          \"ticketPricing\": \"$25-$35 per person (consider purchasing tickets in advance online for discounts)\",\n          \"rating\": 4.5,\n          \"travelTime\": \"10-15 mins walk from Bellagio\"\n        },\n        {\n           \"placeName\":\"Fremont Street Experience\",\n          \"placeDetails\":\"Experience the lively atmosphere of downtown Las Vegas with its Viva Vision light show and street performers.\",\n           \"placeImageUrl\":\"https://media.gettyimages.com/id/1354332056/photo/fremont-street-experience-at-night-in-las-vegas-nevada.jpg?s=612x612&w=gi&k=20&c=3jT76q3j8_0d7g6F-j_YhJ20N5xY0rG4I31Q5l6Xj14=\",\n          \"geoCoordinates\": {\n             \"latitude\": 36.1701,\n            \"longitude\": -115.1400\n           },\n          \"ticketPricing\":\"Free (Activities and games will be costy)\",\n          \"rating\": 4.4,\n          \"travelTime\":\"20-30 mins drive from the Strip\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Culture and Views\",\n        \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"places\": [\n        {\n           \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Explore colorful stacks of painted boulders in the Nevada desert, a great spot for unique photos.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1315477041/photo/seven-magic-mountains-art-installation-in-the-nevada-desert.jpg?s=612x612&w=gi&k=20&c=j_kQ5H9a1sC_8-l8L5jC34_y_U-rT8Q4T4V9e7N1n9U=\",\n          \"geoCoordinates\": {\n            \"latitude\": 35.9541,\n             \"longitude\": -115.2468\n            },\n          \"ticketPricing\": \"Free\",\n           \"rating\": 4.5,\n            \"travelTime\": \"30-40 mins drive from hotels\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"See a collection of old Vegas signs in an outdoor museum, showcasing the city's history. Consider a guided tour for more context.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1405805662/photo/neon-museum-in-downtown-las-vegas-nevada.jpg?s=612x612&w=gi&k=20&c=J200U279y5oE7B7u2lJmD9x9j-806_d9zB0f1a_1w2Y=\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1617,\n            \"longitude\": -115.1453\n          },\n           \"ticketPricing\": \"$20-$30 per person\",\n          \"rating\": 4.6,\n          \"travelTime\":\"30-40 mins drive from Seven Magic Mountain\"\n         },\n           {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\":\"Enjoy scenic drives or hiking trails in this beautiful natural area, with red rock formations and desert landscapes. Entry requires a fee.\",\n          \"placeImageUrl\": \"https://media.gettyimages.com/id/1466329794/photo/red-rock-canyon-national-conservation-area-near-las-vegas-nevada.jpg?s=612x612&w=gi&k=20&c=tTf35bV7r5s82Yn_5vJ-nF9_6E8tQ9pY9e9j0E2u2mE=\",\n          \"geoCoordinates\": {\n           \"latitude\": 36.1496,\n            \"longitude\": -115.4176\n            },\n         \"ticketPricing\": \"$15 per vehicle (can be shared)\",\n          \"rating\": 4.7,\n          \"travelTime\":\"30-40 mins drive from The Neon Museum\"\n        }\n      ]\n    },\n   \"day3\":{\n      \"theme\":\"Relaxation and Souvenirs\",\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"places\":[\n          {\n           \"placeName\":\"Pool Day\",\n           \"placeDetails\":\"Take the morning to relax by your hotel pool, enjoy the sunshine, and cool off before exploring the rest of the day.\",\n           \"placeImageUrl\":\"https://media.gettyimages.com/id/1219883949/photo/swimming-pool-at-resort-with-palm-trees-in-las-vegas-nevada.jpg?s=612x612&w=gi&k=20&c=ZkKx9d0Pq5YmHqXvC7t5tE8l4W5y_0jW7q9l3Z0k8-w=\",\n           \"geoCoordinates\": {\n                \"latitude\":0,\n                \"longitude\":0\n           },\n            \"ticketPricing\":\"Free\",\n            \"rating\": 4.5,\n            \"travelTime\": \"0 mins within the hotel\"\n         },\n          {\n             \"placeName\":\"Shopping at the Las Vegas Strip\",\n             \"placeDetails\":\"Browse the shops along the Strip, including souvenir shops at the malls and hotel locations for affordable mementos.\",\n             \"placeImageUrl\":\"https://media.gettyimages.com/id/977830026/photo/inside-the-forum-shops-at-caesars-palace-on-the-las-vegas-strip.jpg?s=612x612&w=gi&k=20&c=P6_k206zO45P4-j5Z9tK1j2l1iV_214D3a5m6y1_4s0=\",\n             \"geoCoordinates\":{\n                \"latitude\": 36.1167,\n                \"longitude\": -115.1711\n            },\n            \"ticketPricing\":\"Free to Browse\",\n            \"rating\": 4.3,\n            \"travelTime\":\"0-5 mins drive or walk from hotels\"\n          },\n           {\n            \"placeName\":\"Eiffel Tower Experience\",\n            \"placeDetails\":\"Visit the replica of the Eiffel Tower at Paris Las Vegas for a different perspective of the Strip. It is a cheaper option than High roller but gives you the same experience.\",\n            \"placeImageUrl\":\"https://media.gettyimages.com/id/1236602132/photo/the-eiffel-tower-at-paris-las-vegas-hotel.jpg?s=612x612&w=gi&k=20&c=x40g97z8a6_g4rO6f9l4j8i_9t7p8q1l7v1y1s2_6-o=\",\n            \"geoCoordinates\":{\n               \"latitude\": 36.1096,\n                \"longitude\": -115.1715\n           },\n           \"ticketPricing\":\"$20-$30 per person\",\n           \"rating\":4.5,\n           \"travelTime\":\"5-10 mins from shopping places\"\n          },\n          {\n            \"placeName\":\"Free Shows on the Strip\",\n            \"placeDetails\":\"Enjoy free street performances and light shows along the Strip for a final bit of Vegas entertainment, and prepare for departure.\",\n            \"placeImageUrl\":\"https://media.gettyimages.com/id/1409177993/photo/street-performers-on-the-las-vegas-strip.jpg?s=612x612&w=gi&k=20&c=85_k420-9eQ9g9M_8gI4b8r8u2g-8j2F5j2_1k2-80g=\",\n            \"geoCoordinates\":{\n                \"latitude\": 36.1096,\n                \"longitude\": -115.1715\n              },\n            \"ticketPricing\":\"Free\",\n            \"rating\":4.4,\n            \"travelTime\":\"5 mins walk from Eiffel Tower\"\n\n          }\n      ]\n    }\n  }\n}\n```\n**Notes:**\n\n*   **Prices:** Hotel and activity prices are estimates and can vary based on season and booking time. Always check current prices.\n*   **Transportation:** This itinerary assumes you will use ride-sharing services (Uber/Lyft), taxis, or rental cars. Consider public transportation (buses) for cost savings if feasible.\n*   **Food:**  Budget eating can involve fast-food restaurants, food courts, and taking advantage of happy hour deals.\n*   **Flexibility:** This is a suggested itinerary. Feel free to adjust based on your preferences and pace.\n\n**Tips for a Budget Trip:**\n*   **Book in Advance:** Secure hotel deals by booking ahead of time.\n*   **Travel During the Week:** Weekdays often have cheaper hotel rates than weekends.\n*   **Free Activities:** Las Vegas has lots of free attractions like the Bellagio fountains, botanical garden and Fremont street.\n*   **Pack Light and Efficiently:** This helps avoid checked bag fees.\n*   **Utilize Coupons and Discounts:** Look for discounts on shows, attractions, and food.\n*   **Bring Water:** Stay hydrated and avoid high cost of beverages by purchasing your own.\n*  **Walk more:** Walk on the strip whenever possible to see more and save time.\n\nLet me know if you'd like any modifications!\n"},
          ],
        },
      ],
    });
