import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    const dayNumber = date.getDay();

    let type = "a weekday";
    let adv = "It's time to work hard";
    
    if(dayNumber === 0 || dayNumber === 6){
        type = "the weekend";
        adv = "You can relax"; 
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
