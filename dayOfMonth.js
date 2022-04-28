console.log("enter date from 1 to 30:-" +date)
console.log("enter month from 1 to 12:-" +month)
if ((( month > 3 && month < 6 )) && (( date <= 31 && date >= 1 )))
console.log("Month:" +month , "Date:" +date , "True");

else if (( Month == 3 && Date >= 20 && Date <= 31 ))
  console.log("Date:" +Date , "Month:" +Month ,"True");

else if ((Month == 6 && Date <= 20 && Date >= 1 ))
        console.log("Date:" +Date, "Month:" +Month ,"True");
else 
console.log("false");