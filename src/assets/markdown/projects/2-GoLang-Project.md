---
title: Scalable Web Service with GoLang Hacktiv8 Project
desc: This is a backend application using GoLang's GIN and GORM frameworks. The highlight of the project is a Fallout-style survival simulation game. Operators monitor random values of water and wind every 15 seconds. If the values become dangerous, a warning sound is played, and the operator must take action. Successful interventions are rewarded with a credit system stored locally. The final project is a mock backend for a social media app that includes features like posting, commenting, and user profile management, with secure JWT-based authorization.
images: ['/Hacktiv8-1.png','/Hacktiv8-2.png','/Hacktiv8-3.png','/Hacktiv8-4.png','/Hacktiv8-5.png','/Hacktiv8-6.png']
size:
tools: [
    {imagePath: '/go.svg', alt: 'GoLang'},
]
tags: ['personal', 'apps']
---

# *In Depth With GoLang Project*

- Real-time water & wind monitoring system

- Operator credit system with leaderboard

- Frontend-JavaScript integration with backend API

- GIN-powered REST endpoints

- JSON-based local could be enchanced to SQLite

- Background goroutine to simulate environmental changes

- Danger/alert audio trigger logic

- Final JWT-protected social media API (users, comments, posts)

> ##  Fallout-Style Shelter Management Game

This project leverages the GIN web framework to create a dynamic and interactive game experience. Player actions and environmental data are persistently stored in local JSON files (status.json and credit.json), reflecting a simple yet effective data management strategy.


### The Front JavaScript & jQuery
 
The frontend uses vanilla JavaScript and jQuery to handle user input, display real-time environmental status, manage audio alerts, and communicate with the GoLang backend via AJAX requests.

```
<script>
        var nameOperator = "";
        function operatorName(name) {
        nameOperator = name;
        document.getElementById("displayOperatorName").innerText = name;
    }
        const data = new URLSearchParams();
        const url = '/addCredit';
        function addCredit() {
                data.append('name', nameOperator);
                const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
            };
            fetch('/addCredit', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add credit');
                }
                return response.json();
            })
            .then(data => {
                console.log('Credit added successfully:', data);
            })
            .catch(error => {
                console.error('Error adding credit:', error);
            });
        }

        function loadData(){
                $.ajax({
                    url: 'public/status.json', 
                    dataType: 'json',
                    success: function(data){
                    var waterVal = data.status.water;
                    var windVal = data.status.wind;
                    var waterStat, windStat;
                    var water = document.getElementById("water");
                    var wind = document.getElementById("wind");
                    var audio = document.getElementById("danger");
                    var succed = document.getElementById("succed")
                    if (waterVal <= 5) {
                        waterStat = "aman";
                        water.style.color = "#00dd00";
                        succed.play();
                        $('#pump_succed').text("Thanks operator " + nameOperator + "! For your dedicated service.")
                        addCredit();
                    } else if (waterVal >= 6 && waterVal <= 8) {
                        waterStat = "siaga";
                        water.style.color = "yellow";
                        $('#pump_succed').text("Careful operator " + nameOperator + "! Our shelter need some attention.")

                    } else {
                        waterStat = "bahaya";
                        water.style.color = "red";
                        audio.play();
                        $('#pump_succed').text("It's now dangerous operator " + nameOperator + "! Please take a lead!");
                    }

                    if (windVal <= 6) {
                        windStat = "aman";
                        wind.style.color = "#00dd00";
                        succed.play();
                        $('#pump_succed').text("Thanks operator " + nameOperator + "! For your dedicated service.")
                        addCredit();
                    } else if (windVal >= 7 && windVal <= 15) {
                        windStat = "siaga";
                        wind.style.color = "yellow";
                        $('#pump_succed').text("Careful operator " + nameOperator + "! Our shelter need some attention.")
                    } else {
                        windStat = "bahaya";
                        wind.style.color = "red";
                        audio.play();
                        $('#pump_succed').text("It's now dangerous operator " + nameOperator + "! Please take a lead!");
                    }

                    $('#water').text(waterVal + " (" + waterStat + ")" + " m");
                    $('#wind').text(windVal + " (" + windStat + ")" + " m/s");
                    }
                });
                
                $.ajax({
                url: 'public/credit.json',
                dataType: 'json',
                success: function(data) {
                    var creditsHtml = '<ul>';
                    $.each(data, function(name, credits) {
                        creditsHtml += '<li>Operator ' + name + ': ' + credits + ' Credits</li>';
                    });
                    creditsHtml += '</ul>';
                    $('#credits').html(creditsHtml);
                },
                error: function() {
                    $('#credits').html('Failed to load credits.');
                }
            });
                

            }
        $(document).ready(function(){
            
            loadData();

            // Auto-reload
            setInterval(function(){
                loadData();
            }, 15500); // 15500 ms
        });

$(document).ready(function() {
        $("input.pump").click(function(event) {
            event.preventDefault();
            var formDataArray = $("form").serializeArray();
            formDataArray.forEach(function(element) {
            if (element.name === "water" || element.name === "wind") {
                element.value = parseInt(element.value);
            }
        });
        var formDataSerialized = $.param(formDataArray);


            $.ajax({
                type: "POST",
                url: "/pump_water_wind",
                data: formDataSerialized,
                success: function(response) {
                    console.log("Success:", response);
                },
                error: function(error) {
                    console.error("Error:", error);
                }
            });
            loadData();
            $('#pump_succed').text("Thanks operator " + nameOperator + "! You've changed our priority to pump water and wind to:" + formDataSerialized)
        });
    });
    </script>
```

### Water and Wind Maintenance Logic

This endpoint (/pump_water_wind) receives form data for water and wind levels from the frontend, and updates the status.json file.

```
router.POST("/pump_water_wind", func(c *gin.Context) {
    filePath := "./views/status.json"
    waterIn, err := strconv.Atoi(c.PostForm("water"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid value for water"})
        return
    }

    windIn, err := strconv.Atoi(c.PostForm("wind"))
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid value for wind"})
        return
    }
    status := Status{
        Water: waterIn,
        Wind:  windIn,
    }
    jsonSimpan(status, filePath)
})
```

### Credit Logic

The /addCredit endpoint manages the operator credit system. It loads existing credits, increments an operator's credit count, and saves the updated credits back to credit.json.

```
router.POST("/addCredit", func(c *gin.Context) {
    filePath := "./views/credit.json"
    operatorName := c.PostForm("name")
    if operatorName == "" {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid value for operator name"})
        return
    }
    credits, err := loadCredits(filePath)
    if err != nil {
        fmt.Println("Error: ", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to load credits"})
        return
    }
    credit, ok := credits[operatorName]
    if !ok {
        credits[operatorName] = 1
    } else {
        credits[operatorName] = credit + 1
    }

    err = saveCredits(credits, filePath)
    if err != nil {
        fmt.Println("Error: ", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save credits"})
        return
    }
})
```

### Randomizer Logic

A background goroutine continuously updates the status.json file every 15 seconds with new random water and wind values, simulating dynamic environmental changes that the frontend reacts to.

```
func rutinitas15(filePath string) {

	for {
		status := acakStatus()
		err := jsonSimpan(status, filePath)
		if err != nil {
			fmt.Println("Error: ", err)
		}
		time.Sleep(15 * time.Second)
	}
}

func acakStatus() Status {
	return Status{
		Water: rand.Intn(100) + 1, // Dari 1 ke 100
		Wind:  rand.Intn(100) + 1, // Dari 1 ke 100
	}
}

```

![Hacktiv8-1](/Hacktiv8-1.png)


![Hacktiv8-2](/Hacktiv8-2.png)


![Hacktiv8-3](/Hacktiv8-3.png)


![Hacktiv8-4](/Hacktiv8-4.png)


![Hacktiv8-5](/Hacktiv8-5.png)


![Hacktiv8-6](/Hacktiv8-6.png)

