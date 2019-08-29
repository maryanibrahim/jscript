private void getTimeFromAndroid() {
    Date dt = new Date();
    int hours = dt.getHours();
    int min = dt.getMinutes();

    if(hours>=1 || hours<=12){
        Toast.makeText(this, "Good Morning", Toast.LENGTH_SHORT).show();
    }else if(hours>=12 || hours<=16){
        Toast.makeText(this, "Good Afternoon", Toast.LENGTH_SHORT).show();
    }else if(hours>=16 || hours<=21){
        Toast.makeText(this, "Good Evening", Toast.LENGTH_SHORT).show();
    }else if(hours>=21 || hours<=24){
        Toast.makeText(this, "Good Night", Toast.LENGTH_SHORT).show();
    }
}
console.log(getTimeFromAndroid);